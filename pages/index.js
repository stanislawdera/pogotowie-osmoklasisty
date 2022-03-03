import { Wrapper } from "components/atoms/Wrapper/Wrapper.styles";
import MainHeader from "components/organisms/MainHeader/MainHeader";
import React from "react";
import Layout from "../components/organisms/Layout/Layout";
import { Headline } from "components/atoms/Headline/Headline.styles";
import { Paragraph } from "components/atoms/Paragraph/Paragraph.styles";
import { Section } from "components/atoms/Section/Section.styles";
import { Subheadline } from "components/atoms/Subheadline/Subheadline.styles";
import CardLink from "components/organisms/CardLink/CardLink";
import Countdown from "react-countdown";
import CountdownRenderer from "components/organisms/CountdownRenderer/CountdownRenderer";
import Head from "next/head";
import Link from "next/link";

export default function index() {
  return (
    <Layout noHeader>
      <Head>
        <title>
          Pogotowie Ósmoklasisty - bezpłatne warsztaty dla ósmoklasistów
        </title>
        <meta
          name="description"
          content="Pogotowie Egzaminacyjne Ósmoklasisty to 8 tygodniowy cykl spotkań obejmujący wszystkie przedmioty, z którymi zmierzą się ósmoklasiści (język polski, matematyka, język angielski)"
        />
        <meta property="og:title" content="Pogotowie Ósmoklasisty" />
        <meta
          property="og:description"
          content="Bezpłatne zajęcia dla ósmoklasistów. Zapisy od 14 marca od 20:00"
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/testpogotowia.appspot.com/o/og-image.jpg?alt=media&token=c60e28a3-53b1-4989-8074-f866852d8746"
        />
      </Head>
      <MainHeader />
      <Wrapper>
        <Section>
          <Countdown
            date={new Date(2022, 2, 14, 20)}
            renderer={CountdownRenderer}
          />
        </Section>
        <Section as="article">
          <Headline>O co chodzi?</Headline>
          <Paragraph>
            Pogotowie Egzaminacyjne Ósmoklasisty to projekt realizowany przez
            nauczycieli i uczniów Zespołu Szkół SRKAK (popularnego Katolika) z
            Chorzowa.
          </Paragraph>
          <Paragraph>
            Jest to 8 tygodniowy cykl spotkań obejmujący wszystkie przedmioty, z
            którymi zmierzą się ósmoklasiści (język polski, matematyka, język
            angielski). W każdym tygodniu odbędzie się zajęcia właśnie z tych
            przedmiotów.
          </Paragraph>
          <Paragraph>
            Spotkania będą odbywały się głównie we wtorki (od 29 marca) w
            godzinach od 16:30 do 19:30 (po 45 minut na każdy przedmiot).
          </Paragraph>
          <Paragraph>
            Nie są to ani korepetycje, ani lekcje wyrównawcze. Są to zajęcia, na
            których doświadczeni nauczyciele (egzaminatorzy) skupiają się na
            specyfice egzaminu ze swojego przedmiotu, omawiają typy zadań, które
            co roku sprawiają najwięcej problemów oraz uczą odpowiednich
            strategii egzaminacyjnych.
          </Paragraph>
          <Paragraph>
            Projekt jest całkowicie darmowy dla wszystkich uczestników.
          </Paragraph>
        </Section>
        <Section>
          <Headline>Jak się zapisać?</Headline>
          <Paragraph>
            Zapisy rozpoczną się <b>14 marca o godzinie 20:00</b> tylko i
            wyłącznie na stronie&nbsp;
            <Link href="https://www.pogotowie8klasisty.pl">
              pogotowie8klasisty.pl
            </Link>
          </Paragraph>
          <Paragraph>Liczba miejsc: 60</Paragraph>
        </Section>
        <Section>
          <Headline>Dlaczego warto?</Headline>

          <Section as="article">
            <Subheadline>
              Praca z zadaniami o charakterze egzaminacyjnym
            </Subheadline>
            <Paragraph>
              Będziesz miał okazję pracować nad zadaniami egzaminacyjnymi pod
              okiem doświadczonych nauczycieli, którzy od lat z powodzeniem
              przygotowują do egzaminów zewnętrznych.
            </Paragraph>
          </Section>

          <Section as="article">
            <Subheadline>Nowi znajomi</Subheadline>
            <Paragraph>
              Będziesz miał możliwość poznania osób z innych szkół - swoich
              rówieśników, którzy również przygotowują się do egzaminu
              ósmoklasisty. Będziesz mógł się wymienić doświadczeniami, ale
              również spotkać kogoś kto ma podobne zainteresowania jak Ty.
            </Paragraph>
          </Section>

          <Section as="article">
            <Subheadline>Systematyczność i rozwój</Subheadline>
            <Paragraph>
              Poza zajęciami stacjonarnymi będziesz Poza zajęciami stacjonarnymi
              będziesz miał dostęp tego mini portalu - będziemy publikowali
              dodatkowe zadania, informacje, które pomogą Ci zrozumieć omawiane
              zagadnienia. Będziemy również starali się dostarczyć Ci ciekawe
              narzędzia, które wspomagają samorozwój - aplikacje, linki do
              interesujących szkoleń czy wykładów.
            </Paragraph>
          </Section>
        </Section>
        <Section>
          <Headline>Pytania?</Headline>
          <CardLink
            to="https://www.facebook.com/KatolikChorzowLiceum"
            title="Strona chorzowskiego Katolika na Facebooku"
          />
          <CardLink
            to="mailto:kontakt@pogotowie8klasisty.pl"
            title="Napisz maila na kontakt@pogotowie8klasisty.pl"
          />
        </Section>
      </Wrapper>
    </Layout>
  );
}
