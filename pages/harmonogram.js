import { Table } from "components/atoms/Table/Table.styles";
import { Wrapper } from "components/atoms/Wrapper/Wrapper.styles";
import Layout from "components/organisms/Layout/Layout";
import Head from "next/head";
import React from "react";

export default function Harmonogram() {
  return (
    <Layout title="Harmonogram" content="Najważniejsze daty związane z kursem">
      <Head>
        <title>Harmonogram - Pogotowie Ósmoklasisty</title>
        <meta
          name="description"
          content="Najważniejsze daty związane z kursem"
        />
      </Head>
      <Wrapper>
        <Table>
          <tr>
            <th>Data</th>
            <th>Wydarzenie</th>
          </tr>
          <tr>
            <td>14 marca 2022 r.</td>
            <td>Zapisy na zajęcia na stronie projektu</td>
          </tr>
          <tr>
            <td>22 marca 2022 r.&nbsp;</td>
            <td>
              Spotkanie organizacyjne. Szczeg&oacute;ły uczestnicy otrzymają
              mailem
            </td>
          </tr>
          <tr>
            <td>29 marca 2022 r.</td>
            <td>Zajecia nr 1. Od 16:45 do 19:30.</td>
          </tr>
          <tr>
            <td>5 kwietnia 2022 r.</td>
            <td>Zajecia nr 2. Od 16:45 do 19:30.</td>
          </tr>
          <tr>
            <td>12 kwietnia 2022 r.</td>
            <td>Zajecia nr 3. Od 16:45 do 19:30.</td>
          </tr>
          <tr>
            <td>16, 17, 18 kwietnia 2022 r.</td>
            <td>Wielkonoc (sobota, niedziela, poniedziałek)</td>
          </tr>
          <tr>
            <td>20 kwietnia 2022 r.</td>
            <td>Zajecia nr 4. Od 16:45 do 19:30.</td>
          </tr>
          <tr>
            <td>26 kwietnia 2022 r.</td>
            <td>Zajecia nr 5. Od 16:45 do 19:30.</td>
          </tr>
          <tr>
            <td>4 maja 2022 r.</td>
            <td>Zajecia nr 6. Od 16:45 do 19:30.</td>
          </tr>
          <tr>
            <td>10 maja 2022 r.</td>
            <td>Zajecia nr 7. Od 16:45 do 19:30.</td>
          </tr>
          <tr>
            <td>17 maja 2022 r.</td>
            <td>Zajecia nr 8. Zakończenie i podsumowanie zajęć</td>
          </tr>
          <tr>
            <td>24 maja 2022 r.</td>
            <td>Egzamin &Oacute;smoklasisty z Języka polskiego</td>
          </tr>
          <tr>
            <td>25 maja 2022 r.</td>
            <td>Egzamin &Oacute;smoklasisty z Matematyki</td>
          </tr>
          <tr>
            <td>26 maja 2022 r.</td>
            <td>Egzamin &Oacute;smoklasisty z Języka angielskiego</td>
          </tr>
        </Table>
      </Wrapper>
    </Layout>
  );
}
