import { Wrapper } from "components/atoms/Wrapper/Wrapper.styles";
import MainHeader from "components/organisms/MainHeader/MainHeader";
import React from "react";
import Layout from "../components/organisms/Layout/Layout";
import { Headline } from "components/atoms/Headline/Headline.styles";
import { Paragraph } from "components/atoms/Paragraph/Paragraph.styles";
import { BigText } from "components/atoms/BigText/BigText.styles";
import { Section } from "components/atoms/Section/Section.styles";
import { Subheadline } from "components/atoms/Subheadline/Subheadline.styles";

export default function index() {
  return (
    <Layout>
      <MainHeader />
      <Wrapper>
        <Section as="article">
          <Headline>O co chodzi?</Headline>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
            corrupti explicabo in repudiandae earum veniam beatae minus cum
            commodi facilis aperiam ab eos tempore, maxime officia itaque
            laboriosam dicta quaerat impedit ad ratione! Natus eius accusantium
            fugit nobis dolores consequuntur commodi voluptatibus eveniet optio
            magni! Repellat laborum quos ducimus laboriosam cupiditate officiis
            ut in. Aliquid praesentium vel eos nemo aperiam voluptatem sed fuga
            voluptatum tempore voluptates. Ipsum unde quia est, dicta voluptatem
            magni consequuntur rem, repellendus ratione obcaecati autem saepe
            accusamus harum assumenda distinctio repellat ipsam et asperiores
            voluptatibus eveniet esse facilis. Blanditiis vel accusamus sequi,
            cum minima saepe molestias.
          </Paragraph>
        </Section>
        <Section>
          <Headline>Zapisy rozpoczną się</Headline>
          <BigText>14 marca o 20:00</BigText>
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
              Poza zajęciami stacjonarnymi będziesz miał dostęp tego mini
              portalu - będziemy publikowali dodatkowe zadania, informacje,
              które pomogą Ci zrozumieć omawiane zagadnienia. Będziemy również
              starali się dostarczyć Ci ciekawe narzędzia, które wspomagają
              samorozwój - aplikacje, linki do interesujących szkoleń czy
              wykładów.
            </Paragraph>
          </Section>
        </Section>
      </Wrapper>
    </Layout>
  );
}
