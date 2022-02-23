import { Button } from "components/atoms/Button/Button.styles";
import { Col } from "components/atoms/Col/Col.styles";
import { Headline } from "components/atoms/Headline/Headline.styles";
import { Row } from "components/atoms/Row/Row.styles";
import { Wrapper } from "components/atoms/Wrapper/Wrapper.styles";
import FormField from "components/molecules/FormField/FormField";
import Layout from "components/organisms/Layout/Layout";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import doSignUp from "utils/doSignUp";
import useYupValidationResolver from "utils/useYupValidationResolver";
import validationSchema from "utils/signUpFormValidationSchema";

export default function ZapiszSie() {
  const resolver = useYupValidationResolver(validationSchema);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver, mode: "all" });

  const router = useRouter();
  const whenDone = () => router.push("/thank-you");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = (data) => doSignUp(data, setLoading, setError, whenDone);

  return (
    <Layout title="Zapisz się!">
      <Wrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col width="100%">
              <Headline>Dane uczestnika</Headline>
            </Col>
            <Col>
              <FormField
                label="Imię"
                placeholder="Jan"
                error={errors.firstName}
                hookFormProps={register("firstName")}
              />
            </Col>
            <Col>
              <FormField
                label="Nazwisko"
                placeholder="Nowak"
                error={errors.lastName}
                hookFormProps={register("lastName")}
              />
            </Col>
            <Col>
              <FormField
                label="Email"
                placeholder="jan@example.com"
                error={errors.email}
                hookFormProps={register("email")}
              />
            </Col>
            <Col>
              <FormField
                label="Numer telefonu"
                placeholder="123456789"
                error={errors.phone}
                hookFormProps={register("phone")}
              />
            </Col>
          </Row>

          <Row>
            <Col width="100%">
              <Headline>Dane rodzica</Headline>
            </Col>
            <Col>
              <FormField
                label="Imię"
                placeholder="Jan"
                error={errors.parentFirstName}
                hookFormProps={register("parentFirstName")}
              />
            </Col>
            <Col>
              <FormField
                label="Nazwisko"
                placeholder="Nowak"
                error={errors.parentLastName}
                hookFormProps={register("parentLastName")}
              />
            </Col>
            <Col>
              <FormField
                label="Email"
                placeholder="jan@example.com"
                error={errors.parentEmail}
                hookFormProps={register("parentEmail")}
              />
            </Col>
            <Col>
              <FormField
                label="Numer telefonu"
                placeholder="123456789"
                error={errors.parentPhone}
                hookFormProps={register("parentPhone")}
              />
            </Col>
          </Row>

          <Row>
            <Col width="100%">
              <Button type="submit" disabled={!isValid && "disabled"}>
                Prześlij formularz
              </Button>
            </Col>
          </Row>
        </form>
      </Wrapper>
    </Layout>
  );
}
