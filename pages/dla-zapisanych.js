import { Button } from "components/atoms/Button/Button.styles";
import { Card } from "components/atoms/Card/Card.styles";
import { Headline } from "components/atoms/Headline/Headline.styles";
import { Paragraph } from "components/atoms/Paragraph/Paragraph.styles";
import { Section } from "components/atoms/Section/Section.styles";
import { Wrapper } from "components/atoms/Wrapper/Wrapper.styles";
import CardLink from "components/organisms/CardLink/CardLink";
import Layout from "components/organisms/Layout/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function ThankYou() {
  // this page renders after successful sign up
  return (
    <Layout
      title="Dla uczestników"
      content="Najważniejszych informacje dla uczestników zajęć"
      variant="success"
    >
      <Head>
        <title>Informacje dla zapisanych - Pogotowie Ósmoklasisty</title>
      </Head>
      <Wrapper>
        <Paragraph>
          Oto kilka najważniejszych informacji dla uczestników zajęć i ich
          rodziców:
        </Paragraph>
        <Card>
          <Headline>Spotkanie organizacyjne: 22 marca</Headline>
          <Paragraph>
            Spotkanie organizacyjne odbędzie się 22 marca według harmonogramu.
          </Paragraph>
          <Section>
            <Link
              href="/aktualnosci/spotkanie-organizacyjne-harmonogram"
              passHref
            >
              <Button as="a">Harmonogram spotkania organizacyjnego</Button>
            </Link>
          </Section>
        </Card>
        <Card>
          <Paragraph>
            Główną drogą komunikacji jest dla nas e-mail. Dlatego prosimy o
            sprawdzanie skrzynki i - jeżeli maile od nas trafiają do spamu -
            dodanie adresu <b>kontakt@pogotowie8klasisty.pl</b> do kontaktów.
          </Paragraph>
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
