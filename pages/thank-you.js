import { Button } from "components/atoms/Button/Button.styles";
import { Card } from "components/atoms/Card/Card.styles";
import { Headline } from "components/atoms/Headline/Headline.styles";
import { Paragraph } from "components/atoms/Paragraph/Paragraph.styles";
import { Wrapper } from "components/atoms/Wrapper/Wrapper.styles";
import CardLink from "components/organisms/CardLink/CardLink";
import Layout from "components/organisms/Layout/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function ThankYou() {
  // this page renders after successful sign up
  return (
    <Layout title="Zapisano!" content="Witamy na pokładzie!" variant="success">
      <Head>
        <title>Zapisano pomyślnie!</title>
      </Head>
      <Wrapper>
        <Paragraph>
          Zapisano pomyślnie. Jeżeli chcesz zapiać kolejnego uczestnika,{" "}
          <Link href="/zapisz-sie">
            <a>kliknij tutaj</a>
          </Link>
          . Oto kilka ważnych informacji:
        </Paragraph>
        <Card>
          <Headline>Spotkanie organizacyjne: 22 marca</Headline>
          <Paragraph>Szczegóły wyślemy mailem za kilka dni</Paragraph>
        </Card>
        <Card>
          <Headline>Portal Ósmoklasisty</Headline>
          <Paragraph>
            Dla uczestników kursu została przygotowana specjalna aplikacja
            internetowa, która pozwoli na powtórzenie zagadnień omawianych
            podczas zajęć stacjonarnych.
          </Paragraph>
          <Paragraph>
            <b>
              Portal Ósmoklasisty zostanie uruchomiony po pierwszych zajęciach,
              czyli 29 marca. Wtedy też uczestnik dostanie maila z linkiem do
              założenia konta.
            </b>
          </Paragraph>
          <Link href="/portal-osmoklasisty" passHref>
            <Button as="a">Dowiedz się więcej</Button>
          </Link>
        </Card>
        <CardLink to="/harmonogram" title="Zobacz harmonogram zajęć" />
        <CardLink
          to="mailto:kontakt@pogotowie8klasisty.pl"
          title="Masz jakieś pytania? Napisz pod adres kontakt@pogotowie8klasisty.pl"
        />
      </Wrapper>
    </Layout>
  );
}
