import { Card } from "components/atoms/Card/Card.styles";
import { Headline } from "components/atoms/Headline/Headline.styles";
import { Paragraph } from "components/atoms/Paragraph/Paragraph.styles";
import { Row } from "components/atoms/Row/Row.styles";
import { Section } from "components/atoms/Section/Section.styles";
import { Subheadline } from "components/atoms/Subheadline/Subheadline.styles";
import { VideoContainer } from "components/atoms/VideoContainer/VideoContainer.styles";
import { Wrapper } from "components/atoms/Wrapper/Wrapper.styles";
import Layout from "components/organisms/Layout/Layout";
import Head from "next/head";
import React from "react";

export default function PortalOsmoklasisty() {
  return (
    <Layout
      title="Portal Ósmoklasisty"
      content="Specjalna strona dla uczestników kursu"
    >
      <Head>
        <title>Portal Ósmoklasisty</title>
        <meta
          name="description"
          content="Dla uczestników kursu została przygotowana specjalna aplikacja
          internetowa, która pozwoli na powtórzenie zagadnień omawianych podczas
          zajęć stacjonarnych."
        />
      </Head>
      <Wrapper>
        <Headline>O co chodzi?</Headline>
        <Paragraph>
          Dla uczestników kursu została przygotowana specjalna aplikacja
          internetowa, która pozwoli na powtórzenie zagadnień omawianych podczas
          zajęć stacjonarnych.
        </Paragraph>
        <Paragraph>
          <b>
            Portal Ósmoklasisty zostanie uruchomiony po pierwszych zajęciach,
            czyli 29 marca.
          </b>
        </Paragraph>

        <Section>
          <Subheadline>Obejrzyj wprowadzenie</Subheadline>
          <VideoContainer>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/aCy4ee9Py4E"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </VideoContainer>
        </Section>

        <Card>
          <Headline>Jak to działa?</Headline>
          <Paragraph>
            Mniej więcej co tydzień odbywają się zajęcia stacjonarne. Po każdych
            takich zajęciach na Portalu Ósmoklasisty są publikowane dodatkowe
            zadania do samodzielnego wykonania w domu. Po rozwiązaniu zadania
            wyświetlana jest prawidłowa odpowiedź.
          </Paragraph>
        </Card>

        <Card>
          <Headline>Fiszki</Headline>
          <Paragraph>
            Oprócz tego, na Portalu Ósmoklasisty znajdują się zestawy słówek z
            języka angielskiego. Aplikacja najpierw pokazuje użytkownikowi listę
            słówek, a potem po kolei pyta o każde z nich. Jeżeli użytkownik
            udzieli poprawnej odpowiedzi słówko jest uznawane za nauczone.
            Jeżeli nie, zostanie o nie zapytany w przyszłości.
          </Paragraph>
        </Card>
      </Wrapper>
    </Layout>
  );
}
