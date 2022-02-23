import * as yup from "yup";

const nameValidator = yup
  .string()
  .required("To pole jest wymagane")
  .min(2, "Proszę wprowadzić przynajmniej dwa znaki")
  .max(32);
const phoneValidator = yup
  .string()
  .matches(
    /^[0-9]{9}$/,
    "Proszę wprowadzić numer telefonu komórkowego bez prefiksu (9 cyfr)"
  );
const emailValidator = yup
  .string()
  .email("Proszę wprowadzić prawidłowy adres email")
  .required("To pole jest wymagane");

const validationSchema = yup.object({
  firstName: nameValidator,
  lastName: nameValidator,
  phone: phoneValidator,
  email: emailValidator,
  parentFirstName: nameValidator,
  parentLastName: nameValidator,
  parentPhone: phoneValidator,
  parentEmail: emailValidator,
});

export default validationSchema;
