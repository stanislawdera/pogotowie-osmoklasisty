import { Paragraph } from "components/atoms/Paragraph/Paragraph.styles";
import { Section } from "components/atoms/Section/Section.styles";
import { Table } from "components/atoms/Table/Table.styles";
import { Wrapper } from "components/atoms/Wrapper/Wrapper.styles";
import Layout from "components/organisms/Layout/Layout";
import Head from "next/head";
import React from "react";

export default function Harmonogram() {
  return (
    <Layout title="Spotkanie organizacyjne" content="Harmonogram">
      <Head>
        <title>
          Spotkanie organizacyjne (harmonogram) - Pogotowie Ósmoklasisty
        </title>
        <meta name="description" content="" />
      </Head>
      <Wrapper>
        <Paragraph>
          Spotkania organizacyjne odbywają się w grupach według harmonogramu
          poniżej.
        </Paragraph>
        <Paragraph>
          Maile z informacją o przydzieleniu do grupy zostały już wysłane na
          skrzynki pocztowe uczestników. W mailu znajduje się również zestaw
          dokumentów do wypełnienia, które należy donieść na wyznaczoną godzinę.
        </Paragraph>
        <Section>
          <Table>
            <tr>
              <th>Grupa</th>
              <th>Składanie dokumentów</th>
              <th>Spotkanie organizacyjne</th>
            </tr>
            <tr>
              <td>A</td>
              <td>16:00 - 16:30</td>
              <td>16:30 - 17:00</td>
            </tr>
            <tr>
              <td>B</td>
              <td>16:00 - 16:30</td>
              <td>16:30 - 17:00</td>
            </tr>
            <tr>
              <td>C</td>
              <td>16:30 - 17:00</td>
              <td>17:00 - 17:30</td>
            </tr>
            <tr>
              <td>D</td>
              <td>16:30 - 17:00</td>
              <td>17:00 - 17:30</td>
            </tr>
            <tr>
              <td>E</td>
              <td>17:00 - 17:30</td>
              <td>17:30 - 18:00</td>
            </tr>
            <tr>
              <td>F</td>
              <td>17:00 - 17:30</td>
              <td>17:30 - 18:00</td>
            </tr>
          </Table>
        </Section>
      </Wrapper>
    </Layout>
  );
}
