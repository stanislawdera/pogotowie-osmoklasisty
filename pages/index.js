import { Wrapper } from "components/atoms/Wrapper/Wrapper.styles";
import MainHeader from "components/organisms/MainHeader/MainHeader";
import React from "react";
import Layout from "../components/organisms/Layout/Layout";
import { Headline } from "components/atoms/Headline/Headline.styles";
import { Paragraph } from "components/atoms/Paragraph/Paragraph.styles";
import { BigText } from "components/atoms/BigText/BigText.styles";
import { Section } from "components/atoms/Section/Section.styles";

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
      </Wrapper>
    </Layout>
  );
}
