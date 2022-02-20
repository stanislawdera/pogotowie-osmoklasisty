import { ErrorCaption } from "components/atoms/ErrorCaption/ErrorCaption.styles";
import { Input } from "components/atoms/Input/Input.styles";
import { Label } from "components/atoms/Label/Label.styles";
import React, { useEffect } from "react";
import { StyledFormField } from "./FormField.styles";

function FormField(
  { label = "", placeholder = "", error = {}, hookFormProps },
  ref
) {
  return (
    <StyledFormField>
      <Label htmlFor={hookFormProps.name}>{label}</Label>
      <Input
        placeholder={placeholder}
        id={hookFormProps.name}
        ref={ref}
        {...hookFormProps}
      />
      <ErrorCaption>{error.message}</ErrorCaption>
    </StyledFormField>
  );
}

export default React.forwardRef(FormField);
