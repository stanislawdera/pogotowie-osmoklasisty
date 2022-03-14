import { Card } from "components/atoms/Card/Card.styles";
import { Paragraph } from "components/atoms/Paragraph/Paragraph.styles";
import { Subheadline } from "components/atoms/Subheadline/Subheadline.styles";
import { Wrapper } from "components/atoms/Wrapper/Wrapper.styles";
import CardLink from "components/organisms/CardLink/CardLink";
import Layout from "components/organisms/Layout/Layout";
import Head from "next/head";
import React from "react";

export default function Kontakt() {
  return (
    <Layout title="Kontakt" content="Jak się skontaktować?">
      <Head>
        <title>Kontakt - Pogotowie Ósmoklasisty</title>
        <meta name="description" content="Jak się skontaktować?" />
      </Head>
      <Wrapper>
        <Card>
          <Subheadline>Email</Subheadline>
          <Paragraph>kontakt@pogotowie8klasisty.pl</Paragraph>
        </Card>
        <CardLink
          to="https://www.facebook.com/KatolikChorzowLiceum"
          title="Strona chorzowskiego Katolika na Facebooku"
        />
      </Wrapper>
    </Layout>
  );
}
