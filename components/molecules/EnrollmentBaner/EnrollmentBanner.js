import { Headline } from "components/atoms/Headline/Headline.styles";
import { Paragraph } from "components/atoms/Paragraph/Paragraph.styles";
import React from "react";
import { StyledEnrollmentBanner } from "./EnrollmentBanner.styles";

export default function EnrollmentBanner() {
  return (
    <StyledEnrollmentBanner>
      <Headline>Zapisy otwarte!</Headline>
      <Paragraph>
        <u>Kliknij tutaj</u>, aby się zapisać. Liczba miejsc jest ograniczona -
        obowiązuje zasada &bdquo;kto pierwszy, ten lepszy&rdquo;. Formularz
        powinien wypełniać rodzic/opiekun prawny przyszłego uczestnika zajęć.
      </Paragraph>
    </StyledEnrollmentBanner>
  );
}
