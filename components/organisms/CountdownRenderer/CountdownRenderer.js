import { BigText } from "components/atoms/BigText/BigText.styles";
import { UnstyledLink } from "components/atoms/Card/Card.styles";
import { Headline } from "components/atoms/Headline/Headline.styles";
import { MBr } from "components/atoms/MBr/MBr.styles";
import EnrollmentBanner from "components/molecules/EnrollmentBaner/EnrollmentBanner";
import Link from "next/link";
import React from "react";

export default function CountdownRenderer({
  days,
  hours,
  minutes,
  seconds,
  completed,
}) {
  if (!completed) {
    return (
      <>
        <Headline>Zapisy rozpoczną się za</Headline>

        <BigText>
          {days} dni <MBr />
          {hours} godzin <MBr />
          {minutes} minut <MBr />
          {seconds} sekund
        </BigText>
      </>
    );
  } else {
    return (
      <Link href="/zapisz-sie" passHref>
        <UnstyledLink>
          <EnrollmentBanner />
        </UnstyledLink>
      </Link>
    );
  }
}
