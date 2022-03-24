import { Headline } from "components/atoms/Headline/Headline.styles";
import { Section } from "components/atoms/Section/Section.styles";
import { Subheadline } from "components/atoms/Subheadline/Subheadline.styles";
import { Table } from "components/atoms/Table/Table.styles";
import { Wrapper } from "components/atoms/Wrapper/Wrapper.styles";
import Layout from "components/organisms/Layout/Layout";
import Head from "next/head";
import Link from "next/link";
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
        <Headline>Spis treści</Headline>
        <ul style={{ listStylePosition: "inside" }}>
          <li>
            <Link href="#week-1">Spotkanie 1 (wtorek, 29 marca)</Link>
          </li>
          <li>
            <Link href="#week-2">Spotkanie 2 (wtorek, 5 kwietnia)</Link>
          </li>
          <li>
            <Link href="#week-3">Spotkanie 3 (wtorek, 12 kwietnia)</Link>
          </li>
          <li>
            <Link href="#week-4">Spotkanie 4 (środa, 20 kwietnia)</Link>
          </li>
          <li>
            <Link href="#week-5">Spotkanie 5 (wtorek, 26 kwietnia)</Link>
          </li>
          <li>
            <Link href="#week-6">Spotkanie 6 (środa, 4 maja)</Link>
          </li>
          <li>
            <Link href="#week-7">Spotkanie 7 (wtorek, 10 maja)</Link>
          </li>
          <li>
            <Link href="#week-8">Spotkanie 8 (wtorek, 17 maja)</Link>
          </li>
        </ul>
        <Section id="week-1">
          <Subheadline>wtorek, 29 marca</Subheadline>
          <div style={{ overflowX: "auto" }}>
            <Table>
              <tbody>
                <tr>
                  <td width="79" height="17">
                    <p>Grupa</p>
                  </td>
                  <td width="79">
                    <p>Informacje</p>
                  </td>
                  <td width="167">
                    <p>16:45 - 17:30</p>
                  </td>
                  <td width="162">
                    <p>17:45 - 18:30</p>
                  </td>
                  <td width="162">
                    <p>18:45 - 19:30</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="79" height="17">
                    <p>A</p>
                  </td>
                  <td width="79">
                    <p>Prowadzący</p>
                  </td>
                  <td width="167">
                    <p>mgr Iwo Scelina</p>
                  </td>
                  <td width="162">
                    <p>mgr Beata Kopciuch</p>
                  </td>
                  <td width="162">
                    <p>mgr Aleksandra Grycman</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Sala</p>
                  </td>
                  <td width="167">
                    <p>29</p>
                  </td>
                  <td width="162">
                    <p>31</p>
                  </td>
                  <td width="162">
                    <p>11</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Przedmiot</p>
                  </td>
                  <td width="167">
                    <p>Język polski</p>
                  </td>
                  <td width="162">
                    <p>Matematyka</p>
                  </td>
                  <td width="162">
                    <p>Język angielski</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="79" height="17">
                    <p>B</p>
                  </td>
                  <td width="79">
                    <p>Prowadzący</p>
                  </td>
                  <td width="167">
                    <p>dr Ewa Jakubiak- Więcław</p>
                  </td>
                  <td width="162">
                    <p>mgr Lidia Woźnik</p>
                  </td>
                  <td width="162">
                    <p>mgr Magdalena Halicz</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Sala</p>
                  </td>
                  <td width="167">
                    <p>30</p>
                  </td>
                  <td width="162">
                    <p>19</p>
                  </td>
                  <td width="162">
                    <p>25</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Przedmiot</p>
                  </td>
                  <td width="167">
                    <p>Język polski</p>
                  </td>
                  <td width="162">
                    <p>Matematyka</p>
                  </td>
                  <td width="162">
                    <p>Język angielski</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="79" height="17">
                    <p>C</p>
                  </td>
                  <td width="79">
                    <p>Prowadzący</p>
                  </td>
                  <td width="167">
                    <p>mgr Beata Kopciuch</p>
                  </td>
                  <td width="162">
                    <p>mgr Aleksandra Grycman</p>
                  </td>
                  <td width="162">
                    <p>mgr Iwo Scelina</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Sala</p>
                  </td>
                  <td width="167">
                    <p>31</p>
                  </td>
                  <td width="162">
                    <p>11</p>
                  </td>
                  <td width="162">
                    <p>29</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Przedmiot</p>
                  </td>
                  <td width="167">
                    <p>Matematyka</p>
                  </td>
                  <td width="162">
                    <p>Język angielski</p>
                  </td>
                  <td width="162">
                    <p>Język polski</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="79" height="17">
                    <p>D</p>
                  </td>
                  <td width="79">
                    <p>Prowadzący</p>
                  </td>
                  <td width="167">
                    <p>mgr Lidia Woźnik</p>
                  </td>
                  <td width="162">
                    <p>mgr Magdalena Halicz</p>
                  </td>
                  <td width="162">
                    <p>dr Ewa Jakubiak- Więcław</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Sala</p>
                  </td>
                  <td width="167">
                    <p>19</p>
                  </td>
                  <td width="162">
                    <p>25</p>
                  </td>
                  <td width="162">
                    <p>30</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Przedmiot</p>
                  </td>
                  <td width="167">
                    <p>Matematyka</p>
                  </td>
                  <td width="162">
                    <p>Język angielski</p>
                  </td>
                  <td width="162">
                    <p>Język polski</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="79" height="17">
                    <p>E</p>
                  </td>
                  <td width="79">
                    <p>Prowadzący</p>
                  </td>
                  <td width="167">
                    <p>mgr Aleksandra Grycman</p>
                  </td>
                  <td width="162">
                    <p>mgr Iwo Scelina</p>
                  </td>
                  <td width="162">
                    <p>mgr Beata Kopciuch</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Sala</p>
                  </td>
                  <td width="167">
                    <p>11</p>
                  </td>
                  <td width="162">
                    <p>29</p>
                  </td>
                  <td width="162">
                    <p>31</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Przedmiot</p>
                  </td>
                  <td width="167">
                    <p>Język angielski</p>
                  </td>
                  <td width="162">
                    <p>Język polski</p>
                  </td>
                  <td width="162">
                    <p>Matematyka</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="79" height="17">
                    <p>F</p>
                  </td>
                  <td width="79">
                    <p>Prowadzący</p>
                  </td>
                  <td width="167">
                    <p>mgr Magdalena Halicz</p>
                  </td>
                  <td width="162">
                    <p>dr Ewa Jakubiak- Więcław</p>
                  </td>
                  <td width="162">
                    <p>mgr Lidia Woźnik</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Sala</p>
                  </td>
                  <td width="167">
                    <p>25</p>
                  </td>
                  <td width="162">
                    <p>30</p>
                  </td>
                  <td width="162">
                    <p>19</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Przedmiot</p>
                  </td>
                  <td width="167">
                    <p>Język angielski</p>
                  </td>
                  <td width="162">
                    <p>Język polski</p>
                  </td>
                  <td width="162">
                    <p>Matematyka</p>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Section>
        <Section id="week-2">
          <Subheadline>wtorek, 5 kwietnia</Subheadline>
          <div style={{ overflowX: "auto" }}>
            <Table>
              <tbody>
                <tr>
                  <td width="85" height="17">
                    <p>Grupa</p>
                  </td>
                  <td width="85">
                    <p>Grupa</p>
                  </td>
                  <td width="220">
                    <p>16:45 - 17:30</p>
                  </td>
                  <td width="220">
                    <p>17:45 - 18:30</p>
                  </td>
                  <td width="220">
                    <p>18:45 - 19:30</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="85" height="17">
                    <p>A</p>
                  </td>
                  <td width="85">
                    <p>Prowadzący</p>
                  </td>
                  <td width="220">
                    <p>dr Ewa Jakubiak- Więcław</p>
                  </td>
                  <td width="220">
                    <p>mgr Lidia Woźnik</p>
                  </td>
                  <td width="220">
                    <p>mgr Aleksandra Grycman</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Sala</p>
                  </td>
                  <td width="220">
                    <p>30</p>
                  </td>
                  <td width="220">
                    <p>19</p>
                  </td>
                  <td width="220">
                    <p>11</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Przedmiot</p>
                  </td>
                  <td width="220">
                    <p>Język polski</p>
                  </td>
                  <td width="220">
                    <p>Matematyka</p>
                  </td>
                  <td width="220">
                    <p>Język angielski</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="85" height="17">
                    <p>B</p>
                  </td>
                  <td width="85">
                    <p>Prowadzący</p>
                  </td>
                  <td width="220">
                    <p>mgr Iwo Scelina</p>
                  </td>
                  <td width="220">
                    <p>mgr Beata Kopciuch</p>
                  </td>
                  <td width="220">
                    <p>mgr Magdalena Halicz</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Sala</p>
                  </td>
                  <td width="220">
                    <p>29</p>
                  </td>
                  <td width="220">
                    <p>31</p>
                  </td>
                  <td width="220">
                    <p>25</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Przedmiot</p>
                  </td>
                  <td width="220">
                    <p>Język polski</p>
                  </td>
                  <td width="220">
                    <p>Matematyka</p>
                  </td>
                  <td width="220">
                    <p>Język angielski</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="85" height="17">
                    <p>C</p>
                  </td>
                  <td width="85">
                    <p>Prowadzący</p>
                  </td>
                  <td width="220">
                    <p>mgr Lidia Woźnik</p>
                  </td>
                  <td width="220">
                    <p>mgr Aleksandra Grycman</p>
                  </td>
                  <td width="220">
                    <p>dr Ewa Jakubiak- Więcław</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Sala</p>
                  </td>
                  <td width="220">
                    <p>19</p>
                  </td>
                  <td width="220">
                    <p>11</p>
                  </td>
                  <td width="220">
                    <p>30</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Przedmiot</p>
                  </td>
                  <td width="220">
                    <p>Matematyka</p>
                  </td>
                  <td width="220">
                    <p>Język angielski</p>
                  </td>
                  <td width="220">
                    <p>Język polski</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="85" height="17">
                    <p>D</p>
                  </td>
                  <td width="85">
                    <p>Prowadzący</p>
                  </td>
                  <td width="220">
                    <p>mgr Beata Kopciuch</p>
                  </td>
                  <td width="220">
                    <p>mgr Magdalena Halicz</p>
                  </td>
                  <td width="220">
                    <p>mgr Iwo Scelina</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Sala</p>
                  </td>
                  <td width="220">
                    <p>31</p>
                  </td>
                  <td width="220">
                    <p>25</p>
                  </td>
                  <td width="220">
                    <p>29</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Przedmiot</p>
                  </td>
                  <td width="220">
                    <p>Matematyka</p>
                  </td>
                  <td width="220">
                    <p>Język angielski</p>
                  </td>
                  <td width="220">
                    <p>Język polski</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="85" height="17">
                    <p>E</p>
                  </td>
                  <td width="85">
                    <p>Prowadzący</p>
                  </td>
                  <td width="220">
                    <p>mgr Aleksandra Grycman</p>
                  </td>
                  <td width="220">
                    <p>dr Ewa Jakubiak- Więcław</p>
                  </td>
                  <td width="220">
                    <p>mgr Lidia Woźnik</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Sala</p>
                  </td>
                  <td width="220">
                    <p>11</p>
                  </td>
                  <td width="220">
                    <p>30</p>
                  </td>
                  <td width="220">
                    <p>19</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Przedmiot</p>
                  </td>
                  <td width="220">
                    <p>Język angielski</p>
                  </td>
                  <td width="220">
                    <p>Język polski</p>
                  </td>
                  <td width="220">
                    <p>Matematyka</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="85" height="17">
                    <p>F</p>
                  </td>
                  <td width="85">
                    <p>Prowadzący</p>
                  </td>
                  <td width="220">
                    <p>mgr Magdalena Halicz</p>
                  </td>
                  <td width="220">
                    <p>mgr Iwo Scelina</p>
                  </td>
                  <td width="220">
                    <p>mgr Beata Kopciuch</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Sala</p>
                  </td>
                  <td width="220">
                    <p>25</p>
                  </td>
                  <td width="220">
                    <p>29</p>
                  </td>
                  <td width="220">
                    <p>31</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Przedmiot</p>
                  </td>
                  <td width="220">
                    <p>Język angielski</p>
                  </td>
                  <td width="220">
                    <p>Język polski</p>
                  </td>
                  <td width="220">
                    <p>Matematyka</p>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Section>
        <Section id="week-3">
          <Subheadline>wtorek, 12 kwietnia</Subheadline>
          <div style={{ overflowX: "auto" }}>
            <Table>
              <tbody>
                <tr>
                  <td width="79" height="17">
                    <p>Grupa</p>
                  </td>
                  <td width="79">
                    <p>Informacje</p>
                  </td>
                  <td width="167">
                    <p>16:45 - 17:30</p>
                  </td>
                  <td width="162">
                    <p>17:45 - 18:30</p>
                  </td>
                  <td width="162">
                    <p>18:45 - 19:30</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="79" height="17">
                    <p>A</p>
                  </td>
                  <td width="79">
                    <p>Prowadzący</p>
                  </td>
                  <td width="167">
                    <p>mgr Iwo Scelina</p>
                  </td>
                  <td width="162">
                    <p>mgr Beata Kopciuch</p>
                  </td>
                  <td width="162">
                    <p>mgr Aleksandra Grycman</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Sala</p>
                  </td>
                  <td width="167">
                    <p>29</p>
                  </td>
                  <td width="162">
                    <p>31</p>
                  </td>
                  <td width="162">
                    <p>11</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Przedmiot</p>
                  </td>
                  <td width="167">
                    <p>Język polski</p>
                  </td>
                  <td width="162">
                    <p>Matematyka</p>
                  </td>
                  <td width="162">
                    <p>Język angielski</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="79" height="17">
                    <p>B</p>
                  </td>
                  <td width="79">
                    <p>Prowadzący</p>
                  </td>
                  <td width="167">
                    <p>dr Ewa Jakubiak- Więcław</p>
                  </td>
                  <td width="162">
                    <p>mgr Lidia Woźnik</p>
                  </td>
                  <td width="162">
                    <p>mgr Magdalena Halicz</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Sala</p>
                  </td>
                  <td width="167">
                    <p>30</p>
                  </td>
                  <td width="162">
                    <p>19</p>
                  </td>
                  <td width="162">
                    <p>25</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Przedmiot</p>
                  </td>
                  <td width="167">
                    <p>Język polski</p>
                  </td>
                  <td width="162">
                    <p>Matematyka</p>
                  </td>
                  <td width="162">
                    <p>Język angielski</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="79" height="17">
                    <p>C</p>
                  </td>
                  <td width="79">
                    <p>Prowadzący</p>
                  </td>
                  <td width="167">
                    <p>mgr Beata Kopciuch</p>
                  </td>
                  <td width="162">
                    <p>mgr Aleksandra Grycman</p>
                  </td>
                  <td width="162">
                    <p>mgr Iwo Scelina</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Sala</p>
                  </td>
                  <td width="167">
                    <p>31</p>
                  </td>
                  <td width="162">
                    <p>11</p>
                  </td>
                  <td width="162">
                    <p>29</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Przedmiot</p>
                  </td>
                  <td width="167">
                    <p>Matematyka</p>
                  </td>
                  <td width="162">
                    <p>Język angielski</p>
                  </td>
                  <td width="162">
                    <p>Język polski</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="79" height="17">
                    <p>D</p>
                  </td>
                  <td width="79">
                    <p>Prowadzący</p>
                  </td>
                  <td width="167">
                    <p>mgr Lidia Woźnik</p>
                  </td>
                  <td width="162">
                    <p>mgr Magdalena Halicz</p>
                  </td>
                  <td width="162">
                    <p>dr Ewa Jakubiak- Więcław</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Sala</p>
                  </td>
                  <td width="167">
                    <p>19</p>
                  </td>
                  <td width="162">
                    <p>25</p>
                  </td>
                  <td width="162">
                    <p>30</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Przedmiot</p>
                  </td>
                  <td width="167">
                    <p>Matematyka</p>
                  </td>
                  <td width="162">
                    <p>Język angielski</p>
                  </td>
                  <td width="162">
                    <p>Język polski</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="79" height="17">
                    <p>E</p>
                  </td>
                  <td width="79">
                    <p>Prowadzący</p>
                  </td>
                  <td width="167">
                    <p>mgr Aleksandra Grycman</p>
                  </td>
                  <td width="162">
                    <p>mgr Iwo Scelina</p>
                  </td>
                  <td width="162">
                    <p>mgr Beata Kopciuch</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Sala</p>
                  </td>
                  <td width="167">
                    <p>11</p>
                  </td>
                  <td width="162">
                    <p>29</p>
                  </td>
                  <td width="162">
                    <p>31</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Przedmiot</p>
                  </td>
                  <td width="167">
                    <p>Język angielski</p>
                  </td>
                  <td width="162">
                    <p>Język polski</p>
                  </td>
                  <td width="162">
                    <p>Matematyka</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="79" height="17">
                    <p>F</p>
                  </td>
                  <td width="79">
                    <p>Prowadzący</p>
                  </td>
                  <td width="167">
                    <p>mgr Magdalena Halicz</p>
                  </td>
                  <td width="162">
                    <p>dr Ewa Jakubiak- Więcław</p>
                  </td>
                  <td width="162">
                    <p>mgr Lidia Woźnik</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Sala</p>
                  </td>
                  <td width="167">
                    <p>25</p>
                  </td>
                  <td width="162">
                    <p>30</p>
                  </td>
                  <td width="162">
                    <p>19</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Przedmiot</p>
                  </td>
                  <td width="167">
                    <p>Język angielski</p>
                  </td>
                  <td width="162">
                    <p>Język polski</p>
                  </td>
                  <td width="162">
                    <p>Matematyka</p>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Section>
        <Section id="week-4">
          <Subheadline>środa, 20 kwietnia</Subheadline>
          <div style={{ overflowX: "auto" }}>
            <Table>
              <tbody>
                <tr>
                  <td width="85" height="17">
                    <p>Grupa</p>
                  </td>
                  <td width="85">
                    <p>Grupa</p>
                  </td>
                  <td width="220">
                    <p>16:45 - 17:30</p>
                  </td>
                  <td width="220">
                    <p>17:45 - 18:30</p>
                  </td>
                  <td width="220">
                    <p>18:45 - 19:30</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="85" height="17">
                    <p>A</p>
                  </td>
                  <td width="85">
                    <p>Prowadzący</p>
                  </td>
                  <td width="220">
                    <p>dr Ewa Jakubiak- Więcław</p>
                  </td>
                  <td width="220">
                    <p>mgr Lidia Woźnik</p>
                  </td>
                  <td width="220">
                    <p>mgr Aleksandra Grycman</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Sala</p>
                  </td>
                  <td width="220">
                    <p>30</p>
                  </td>
                  <td width="220">
                    <p>19</p>
                  </td>
                  <td width="220">
                    <p>11</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Przedmiot</p>
                  </td>
                  <td width="220">
                    <p>Język polski</p>
                  </td>
                  <td width="220">
                    <p>Matematyka</p>
                  </td>
                  <td width="220">
                    <p>Język angielski</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="85" height="17">
                    <p>B</p>
                  </td>
                  <td width="85">
                    <p>Prowadzący</p>
                  </td>
                  <td width="220">
                    <p>mgr Iwo Scelina</p>
                  </td>
                  <td width="220">
                    <p>mgr Beata Kopciuch</p>
                  </td>
                  <td width="220">
                    <p>mgr Magdalena Halicz</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Sala</p>
                  </td>
                  <td width="220">
                    <p>29</p>
                  </td>
                  <td width="220">
                    <p>31</p>
                  </td>
                  <td width="220">
                    <p>25</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Przedmiot</p>
                  </td>
                  <td width="220">
                    <p>Język polski</p>
                  </td>
                  <td width="220">
                    <p>Matematyka</p>
                  </td>
                  <td width="220">
                    <p>Język angielski</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="85" height="17">
                    <p>C</p>
                  </td>
                  <td width="85">
                    <p>Prowadzący</p>
                  </td>
                  <td width="220">
                    <p>mgr Lidia Woźnik</p>
                  </td>
                  <td width="220">
                    <p>mgr Aleksandra Grycman</p>
                  </td>
                  <td width="220">
                    <p>dr Ewa Jakubiak- Więcław</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Sala</p>
                  </td>
                  <td width="220">
                    <p>19</p>
                  </td>
                  <td width="220">
                    <p>11</p>
                  </td>
                  <td width="220">
                    <p>30</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Przedmiot</p>
                  </td>
                  <td width="220">
                    <p>Matematyka</p>
                  </td>
                  <td width="220">
                    <p>Język angielski</p>
                  </td>
                  <td width="220">
                    <p>Język polski</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="85" height="17">
                    <p>D</p>
                  </td>
                  <td width="85">
                    <p>Prowadzący</p>
                  </td>
                  <td width="220">
                    <p>mgr Beata Kopciuch</p>
                  </td>
                  <td width="220">
                    <p>mgr Magdalena Halicz</p>
                  </td>
                  <td width="220">
                    <p>mgr Iwo Scelina</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Sala</p>
                  </td>
                  <td width="220">
                    <p>31</p>
                  </td>
                  <td width="220">
                    <p>25</p>
                  </td>
                  <td width="220">
                    <p>29</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Przedmiot</p>
                  </td>
                  <td width="220">
                    <p>Matematyka</p>
                  </td>
                  <td width="220">
                    <p>Język angielski</p>
                  </td>
                  <td width="220">
                    <p>Język polski</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="85" height="17">
                    <p>E</p>
                  </td>
                  <td width="85">
                    <p>Prowadzący</p>
                  </td>
                  <td width="220">
                    <p>mgr Aleksandra Grycman</p>
                  </td>
                  <td width="220">
                    <p>dr Ewa Jakubiak- Więcław</p>
                  </td>
                  <td width="220">
                    <p>mgr Lidia Woźnik</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Sala</p>
                  </td>
                  <td width="220">
                    <p>11</p>
                  </td>
                  <td width="220">
                    <p>30</p>
                  </td>
                  <td width="220">
                    <p>19</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Przedmiot</p>
                  </td>
                  <td width="220">
                    <p>Język angielski</p>
                  </td>
                  <td width="220">
                    <p>Język polski</p>
                  </td>
                  <td width="220">
                    <p>Matematyka</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="85" height="17">
                    <p>F</p>
                  </td>
                  <td width="85">
                    <p>Prowadzący</p>
                  </td>
                  <td width="220">
                    <p>mgr Magdalena Halicz</p>
                  </td>
                  <td width="220">
                    <p>mgr Iwo Scelina</p>
                  </td>
                  <td width="220">
                    <p>mgr Beata Kopciuch</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Sala</p>
                  </td>
                  <td width="220">
                    <p>25</p>
                  </td>
                  <td width="220">
                    <p>29</p>
                  </td>
                  <td width="220">
                    <p>31</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Przedmiot</p>
                  </td>
                  <td width="220">
                    <p>Język angielski</p>
                  </td>
                  <td width="220">
                    <p>Język polski</p>
                  </td>
                  <td width="220">
                    <p>Matematyka</p>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Section>
        <Section id="week-5">
          <Subheadline>wtorek, 26 kwietnia</Subheadline>
          <div style={{ overflowX: "auto" }}>
            <Table>
              <tbody>
                <tr>
                  <td width="79" height="17">
                    <p>Grupa</p>
                  </td>
                  <td width="79">
                    <p>Informacje</p>
                  </td>
                  <td width="167">
                    <p>16:45 - 17:30</p>
                  </td>
                  <td width="162">
                    <p>17:45 - 18:30</p>
                  </td>
                  <td width="162">
                    <p>18:45 - 19:30</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="79" height="17">
                    <p>A</p>
                  </td>
                  <td width="79">
                    <p>Prowadzący</p>
                  </td>
                  <td width="167">
                    <p>mgr Iwo Scelina</p>
                  </td>
                  <td width="162">
                    <p>mgr Beata Kopciuch</p>
                  </td>
                  <td width="162">
                    <p>mgr Aleksandra Grycman</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Sala</p>
                  </td>
                  <td width="167">
                    <p>29</p>
                  </td>
                  <td width="162">
                    <p>31</p>
                  </td>
                  <td width="162">
                    <p>11</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Przedmiot</p>
                  </td>
                  <td width="167">
                    <p>Język polski</p>
                  </td>
                  <td width="162">
                    <p>Matematyka</p>
                  </td>
                  <td width="162">
                    <p>Język angielski</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="79" height="17">
                    <p>B</p>
                  </td>
                  <td width="79">
                    <p>Prowadzący</p>
                  </td>
                  <td width="167">
                    <p>dr Ewa Jakubiak- Więcław</p>
                  </td>
                  <td width="162">
                    <p>mgr Lidia Woźnik</p>
                  </td>
                  <td width="162">
                    <p>mgr Magdalena Halicz</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Sala</p>
                  </td>
                  <td width="167">
                    <p>30</p>
                  </td>
                  <td width="162">
                    <p>19</p>
                  </td>
                  <td width="162">
                    <p>25</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Przedmiot</p>
                  </td>
                  <td width="167">
                    <p>Język polski</p>
                  </td>
                  <td width="162">
                    <p>Matematyka</p>
                  </td>
                  <td width="162">
                    <p>Język angielski</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="79" height="17">
                    <p>C</p>
                  </td>
                  <td width="79">
                    <p>Prowadzący</p>
                  </td>
                  <td width="167">
                    <p>mgr Beata Kopciuch</p>
                  </td>
                  <td width="162">
                    <p>mgr Aleksandra Grycman</p>
                  </td>
                  <td width="162">
                    <p>mgr Iwo Scelina</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Sala</p>
                  </td>
                  <td width="167">
                    <p>31</p>
                  </td>
                  <td width="162">
                    <p>11</p>
                  </td>
                  <td width="162">
                    <p>29</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Przedmiot</p>
                  </td>
                  <td width="167">
                    <p>Matematyka</p>
                  </td>
                  <td width="162">
                    <p>Język angielski</p>
                  </td>
                  <td width="162">
                    <p>Język polski</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="79" height="17">
                    <p>D</p>
                  </td>
                  <td width="79">
                    <p>Prowadzący</p>
                  </td>
                  <td width="167">
                    <p>mgr Lidia Woźnik</p>
                  </td>
                  <td width="162">
                    <p>mgr Magdalena Halicz</p>
                  </td>
                  <td width="162">
                    <p>dr Ewa Jakubiak- Więcław</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Sala</p>
                  </td>
                  <td width="167">
                    <p>19</p>
                  </td>
                  <td width="162">
                    <p>25</p>
                  </td>
                  <td width="162">
                    <p>30</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Przedmiot</p>
                  </td>
                  <td width="167">
                    <p>Matematyka</p>
                  </td>
                  <td width="162">
                    <p>Język angielski</p>
                  </td>
                  <td width="162">
                    <p>Język polski</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="79" height="17">
                    <p>E</p>
                  </td>
                  <td width="79">
                    <p>Prowadzący</p>
                  </td>
                  <td width="167">
                    <p>mgr Aleksandra Grycman</p>
                  </td>
                  <td width="162">
                    <p>mgr Iwo Scelina</p>
                  </td>
                  <td width="162">
                    <p>mgr Beata Kopciuch</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Sala</p>
                  </td>
                  <td width="167">
                    <p>11</p>
                  </td>
                  <td width="162">
                    <p>29</p>
                  </td>
                  <td width="162">
                    <p>31</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Przedmiot</p>
                  </td>
                  <td width="167">
                    <p>Język angielski</p>
                  </td>
                  <td width="162">
                    <p>Język polski</p>
                  </td>
                  <td width="162">
                    <p>Matematyka</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="79" height="17">
                    <p>F</p>
                  </td>
                  <td width="79">
                    <p>Prowadzący</p>
                  </td>
                  <td width="167">
                    <p>mgr Magdalena Halicz</p>
                  </td>
                  <td width="162">
                    <p>dr Ewa Jakubiak- Więcław</p>
                  </td>
                  <td width="162">
                    <p>mgr Lidia Woźnik</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Sala</p>
                  </td>
                  <td width="167">
                    <p>25</p>
                  </td>
                  <td width="162">
                    <p>30</p>
                  </td>
                  <td width="162">
                    <p>19</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Przedmiot</p>
                  </td>
                  <td width="167">
                    <p>Język angielski</p>
                  </td>
                  <td width="162">
                    <p>Język polski</p>
                  </td>
                  <td width="162">
                    <p>Matematyka</p>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Section>
        <Section id="week-6">
          <Subheadline>środa, 4 maja</Subheadline>
          <div style={{ overflowX: "auto" }}>
            <Table>
              <tbody>
                <tr>
                  <td width="85" height="17">
                    <p>Grupa</p>
                  </td>
                  <td width="85">
                    <p>Grupa</p>
                  </td>
                  <td width="220">
                    <p>16:45 - 17:30</p>
                  </td>
                  <td width="220">
                    <p>17:45 - 18:30</p>
                  </td>
                  <td width="220">
                    <p>18:45 - 19:30</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="85" height="17">
                    <p>A</p>
                  </td>
                  <td width="85">
                    <p>Prowadzący</p>
                  </td>
                  <td width="220">
                    <p>dr Ewa Jakubiak- Więcław</p>
                  </td>
                  <td width="220">
                    <p>mgr Lidia Woźnik</p>
                  </td>
                  <td width="220">
                    <p>mgr Aleksandra Grycman</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Sala</p>
                  </td>
                  <td width="220">
                    <p>30</p>
                  </td>
                  <td width="220">
                    <p>19</p>
                  </td>
                  <td width="220">
                    <p>11</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Przedmiot</p>
                  </td>
                  <td width="220">
                    <p>Język polski</p>
                  </td>
                  <td width="220">
                    <p>Matematyka</p>
                  </td>
                  <td width="220">
                    <p>Język angielski</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="85" height="17">
                    <p>B</p>
                  </td>
                  <td width="85">
                    <p>Prowadzący</p>
                  </td>
                  <td width="220">
                    <p>mgr Iwo Scelina</p>
                  </td>
                  <td width="220">
                    <p>mgr Beata Kopciuch</p>
                  </td>
                  <td width="220">
                    <p>mgr Magdalena Halicz</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Sala</p>
                  </td>
                  <td width="220">
                    <p>29</p>
                  </td>
                  <td width="220">
                    <p>31</p>
                  </td>
                  <td width="220">
                    <p>25</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Przedmiot</p>
                  </td>
                  <td width="220">
                    <p>Język polski</p>
                  </td>
                  <td width="220">
                    <p>Matematyka</p>
                  </td>
                  <td width="220">
                    <p>Język angielski</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="85" height="17">
                    <p>C</p>
                  </td>
                  <td width="85">
                    <p>Prowadzący</p>
                  </td>
                  <td width="220">
                    <p>mgr Lidia Woźnik</p>
                  </td>
                  <td width="220">
                    <p>mgr Aleksandra Grycman</p>
                  </td>
                  <td width="220">
                    <p>dr Ewa Jakubiak- Więcław</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Sala</p>
                  </td>
                  <td width="220">
                    <p>19</p>
                  </td>
                  <td width="220">
                    <p>11</p>
                  </td>
                  <td width="220">
                    <p>30</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Przedmiot</p>
                  </td>
                  <td width="220">
                    <p>Matematyka</p>
                  </td>
                  <td width="220">
                    <p>Język angielski</p>
                  </td>
                  <td width="220">
                    <p>Język polski</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="85" height="17">
                    <p>D</p>
                  </td>
                  <td width="85">
                    <p>Prowadzący</p>
                  </td>
                  <td width="220">
                    <p>mgr Beata Kopciuch</p>
                  </td>
                  <td width="220">
                    <p>mgr Magdalena Halicz</p>
                  </td>
                  <td width="220">
                    <p>mgr Iwo Scelina</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Sala</p>
                  </td>
                  <td width="220">
                    <p>31</p>
                  </td>
                  <td width="220">
                    <p>25</p>
                  </td>
                  <td width="220">
                    <p>29</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Przedmiot</p>
                  </td>
                  <td width="220">
                    <p>Matematyka</p>
                  </td>
                  <td width="220">
                    <p>Język angielski</p>
                  </td>
                  <td width="220">
                    <p>Język polski</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="85" height="17">
                    <p>E</p>
                  </td>
                  <td width="85">
                    <p>Prowadzący</p>
                  </td>
                  <td width="220">
                    <p>mgr Aleksandra Grycman</p>
                  </td>
                  <td width="220">
                    <p>dr Ewa Jakubiak- Więcław</p>
                  </td>
                  <td width="220">
                    <p>mgr Lidia Woźnik</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Sala</p>
                  </td>
                  <td width="220">
                    <p>11</p>
                  </td>
                  <td width="220">
                    <p>30</p>
                  </td>
                  <td width="220">
                    <p>19</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Przedmiot</p>
                  </td>
                  <td width="220">
                    <p>Język angielski</p>
                  </td>
                  <td width="220">
                    <p>Język polski</p>
                  </td>
                  <td width="220">
                    <p>Matematyka</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="85" height="17">
                    <p>F</p>
                  </td>
                  <td width="85">
                    <p>Prowadzący</p>
                  </td>
                  <td width="220">
                    <p>mgr Magdalena Halicz</p>
                  </td>
                  <td width="220">
                    <p>mgr Iwo Scelina</p>
                  </td>
                  <td width="220">
                    <p>mgr Beata Kopciuch</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Sala</p>
                  </td>
                  <td width="220">
                    <p>25</p>
                  </td>
                  <td width="220">
                    <p>29</p>
                  </td>
                  <td width="220">
                    <p>31</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Przedmiot</p>
                  </td>
                  <td width="220">
                    <p>Język angielski</p>
                  </td>
                  <td width="220">
                    <p>Język polski</p>
                  </td>
                  <td width="220">
                    <p>Matematyka</p>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Section>
        <Section id="week-7">
          <Subheadline>wtorek, 10 maja</Subheadline>
          <div style={{ overflowX: "auto" }}>
            <Table>
              <tbody>
                <tr>
                  <td width="79" height="17">
                    <p>Grupa</p>
                  </td>
                  <td width="79">
                    <p>Informacje</p>
                  </td>
                  <td width="167">
                    <p>16:45 - 17:30</p>
                  </td>
                  <td width="162">
                    <p>17:45 - 18:30</p>
                  </td>
                  <td width="162">
                    <p>18:45 - 19:30</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="79" height="17">
                    <p>A</p>
                  </td>
                  <td width="79">
                    <p>Prowadzący</p>
                  </td>
                  <td width="167">
                    <p>mgr Iwo Scelina</p>
                  </td>
                  <td width="162">
                    <p>mgr Beata Kopciuch</p>
                  </td>
                  <td width="162">
                    <p>mgr Aleksandra Grycman</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Sala</p>
                  </td>
                  <td width="167">
                    <p>29</p>
                  </td>
                  <td width="162">
                    <p>31</p>
                  </td>
                  <td width="162">
                    <p>11</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Przedmiot</p>
                  </td>
                  <td width="167">
                    <p>Język polski</p>
                  </td>
                  <td width="162">
                    <p>Matematyka</p>
                  </td>
                  <td width="162">
                    <p>Język angielski</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="79" height="17">
                    <p>B</p>
                  </td>
                  <td width="79">
                    <p>Prowadzący</p>
                  </td>
                  <td width="167">
                    <p>dr Ewa Jakubiak- Więcław</p>
                  </td>
                  <td width="162">
                    <p>mgr Lidia Woźnik</p>
                  </td>
                  <td width="162">
                    <p>mgr Magdalena Halicz</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Sala</p>
                  </td>
                  <td width="167">
                    <p>30</p>
                  </td>
                  <td width="162">
                    <p>19</p>
                  </td>
                  <td width="162">
                    <p>25</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Przedmiot</p>
                  </td>
                  <td width="167">
                    <p>Język polski</p>
                  </td>
                  <td width="162">
                    <p>Matematyka</p>
                  </td>
                  <td width="162">
                    <p>Język angielski</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="79" height="17">
                    <p>C</p>
                  </td>
                  <td width="79">
                    <p>Prowadzący</p>
                  </td>
                  <td width="167">
                    <p>mgr Beata Kopciuch</p>
                  </td>
                  <td width="162">
                    <p>mgr Aleksandra Grycman</p>
                  </td>
                  <td width="162">
                    <p>mgr Iwo Scelina</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Sala</p>
                  </td>
                  <td width="167">
                    <p>31</p>
                  </td>
                  <td width="162">
                    <p>11</p>
                  </td>
                  <td width="162">
                    <p>29</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Przedmiot</p>
                  </td>
                  <td width="167">
                    <p>Matematyka</p>
                  </td>
                  <td width="162">
                    <p>Język angielski</p>
                  </td>
                  <td width="162">
                    <p>Język polski</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="79" height="17">
                    <p>D</p>
                  </td>
                  <td width="79">
                    <p>Prowadzący</p>
                  </td>
                  <td width="167">
                    <p>mgr Lidia Woźnik</p>
                  </td>
                  <td width="162">
                    <p>mgr Magdalena Halicz</p>
                  </td>
                  <td width="162">
                    <p>dr Ewa Jakubiak- Więcław</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Sala</p>
                  </td>
                  <td width="167">
                    <p>19</p>
                  </td>
                  <td width="162">
                    <p>25</p>
                  </td>
                  <td width="162">
                    <p>30</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Przedmiot</p>
                  </td>
                  <td width="167">
                    <p>Matematyka</p>
                  </td>
                  <td width="162">
                    <p>Język angielski</p>
                  </td>
                  <td width="162">
                    <p>Język polski</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="79" height="17">
                    <p>E</p>
                  </td>
                  <td width="79">
                    <p>Prowadzący</p>
                  </td>
                  <td width="167">
                    <p>mgr Aleksandra Grycman</p>
                  </td>
                  <td width="162">
                    <p>mgr Iwo Scelina</p>
                  </td>
                  <td width="162">
                    <p>mgr Beata Kopciuch</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Sala</p>
                  </td>
                  <td width="167">
                    <p>11</p>
                  </td>
                  <td width="162">
                    <p>29</p>
                  </td>
                  <td width="162">
                    <p>31</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Przedmiot</p>
                  </td>
                  <td width="167">
                    <p>Język angielski</p>
                  </td>
                  <td width="162">
                    <p>Język polski</p>
                  </td>
                  <td width="162">
                    <p>Matematyka</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="79" height="17">
                    <p>F</p>
                  </td>
                  <td width="79">
                    <p>Prowadzący</p>
                  </td>
                  <td width="167">
                    <p>mgr Magdalena Halicz</p>
                  </td>
                  <td width="162">
                    <p>dr Ewa Jakubiak- Więcław</p>
                  </td>
                  <td width="162">
                    <p>mgr Lidia Woźnik</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Sala</p>
                  </td>
                  <td width="167">
                    <p>25</p>
                  </td>
                  <td width="162">
                    <p>30</p>
                  </td>
                  <td width="162">
                    <p>19</p>
                  </td>
                </tr>
                <tr>
                  <td width="79">
                    <p>Przedmiot</p>
                  </td>
                  <td width="167">
                    <p>Język angielski</p>
                  </td>
                  <td width="162">
                    <p>Język polski</p>
                  </td>
                  <td width="162">
                    <p>Matematyka</p>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Section>
        <Section id="week-8">
          <Subheadline>wtorek, 17 maja</Subheadline>
          <div style={{ overflowX: "auto" }}>
            <Table>
              <tbody>
                <tr>
                  <td width="85" height="17">
                    <p>Grupa</p>
                  </td>
                  <td width="85">
                    <p>Grupa</p>
                  </td>
                  <td width="220">
                    <p>16:45 - 17:30</p>
                  </td>
                  <td width="220">
                    <p>17:45 - 18:30</p>
                  </td>
                  <td width="220">
                    <p>18:45 - 19:30</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="85" height="17">
                    <p>A</p>
                  </td>
                  <td width="85">
                    <p>Prowadzący</p>
                  </td>
                  <td width="220">
                    <p>dr Ewa Jakubiak- Więcław</p>
                  </td>
                  <td width="220">
                    <p>mgr Lidia Woźnik</p>
                  </td>
                  <td width="220">
                    <p>mgr Aleksandra Grycman</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Sala</p>
                  </td>
                  <td width="220">
                    <p>30</p>
                  </td>
                  <td width="220">
                    <p>19</p>
                  </td>
                  <td width="220">
                    <p>11</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Przedmiot</p>
                  </td>
                  <td width="220">
                    <p>Język polski</p>
                  </td>
                  <td width="220">
                    <p>Matematyka</p>
                  </td>
                  <td width="220">
                    <p>Język angielski</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="85" height="17">
                    <p>B</p>
                  </td>
                  <td width="85">
                    <p>Prowadzący</p>
                  </td>
                  <td width="220">
                    <p>mgr Iwo Scelina</p>
                  </td>
                  <td width="220">
                    <p>mgr Beata Kopciuch</p>
                  </td>
                  <td width="220">
                    <p>mgr Magdalena Halicz</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Sala</p>
                  </td>
                  <td width="220">
                    <p>29</p>
                  </td>
                  <td width="220">
                    <p>31</p>
                  </td>
                  <td width="220">
                    <p>25</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Przedmiot</p>
                  </td>
                  <td width="220">
                    <p>Język polski</p>
                  </td>
                  <td width="220">
                    <p>Matematyka</p>
                  </td>
                  <td width="220">
                    <p>Język angielski</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="85" height="17">
                    <p>C</p>
                  </td>
                  <td width="85">
                    <p>Prowadzący</p>
                  </td>
                  <td width="220">
                    <p>mgr Lidia Woźnik</p>
                  </td>
                  <td width="220">
                    <p>mgr Aleksandra Grycman</p>
                  </td>
                  <td width="220">
                    <p>dr Ewa Jakubiak- Więcław</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Sala</p>
                  </td>
                  <td width="220">
                    <p>19</p>
                  </td>
                  <td width="220">
                    <p>11</p>
                  </td>
                  <td width="220">
                    <p>30</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Przedmiot</p>
                  </td>
                  <td width="220">
                    <p>Matematyka</p>
                  </td>
                  <td width="220">
                    <p>Język angielski</p>
                  </td>
                  <td width="220">
                    <p>Język polski</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="85" height="17">
                    <p>D</p>
                  </td>
                  <td width="85">
                    <p>Prowadzący</p>
                  </td>
                  <td width="220">
                    <p>mgr Beata Kopciuch</p>
                  </td>
                  <td width="220">
                    <p>mgr Magdalena Halicz</p>
                  </td>
                  <td width="220">
                    <p>mgr Iwo Scelina</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Sala</p>
                  </td>
                  <td width="220">
                    <p>31</p>
                  </td>
                  <td width="220">
                    <p>25</p>
                  </td>
                  <td width="220">
                    <p>29</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Przedmiot</p>
                  </td>
                  <td width="220">
                    <p>Matematyka</p>
                  </td>
                  <td width="220">
                    <p>Język angielski</p>
                  </td>
                  <td width="220">
                    <p>Język polski</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="85" height="17">
                    <p>E</p>
                  </td>
                  <td width="85">
                    <p>Prowadzący</p>
                  </td>
                  <td width="220">
                    <p>mgr Aleksandra Grycman</p>
                  </td>
                  <td width="220">
                    <p>dr Ewa Jakubiak- Więcław</p>
                  </td>
                  <td width="220">
                    <p>mgr Lidia Woźnik</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Sala</p>
                  </td>
                  <td width="220">
                    <p>11</p>
                  </td>
                  <td width="220">
                    <p>30</p>
                  </td>
                  <td width="220">
                    <p>19</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Przedmiot</p>
                  </td>
                  <td width="220">
                    <p>Język angielski</p>
                  </td>
                  <td width="220">
                    <p>Język polski</p>
                  </td>
                  <td width="220">
                    <p>Matematyka</p>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" width="85" height="17">
                    <p>F</p>
                  </td>
                  <td width="85">
                    <p>Prowadzący</p>
                  </td>
                  <td width="220">
                    <p>mgr Magdalena Halicz</p>
                  </td>
                  <td width="220">
                    <p>mgr Iwo Scelina</p>
                  </td>
                  <td width="220">
                    <p>mgr Beata Kopciuch</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Sala</p>
                  </td>
                  <td width="220">
                    <p>25</p>
                  </td>
                  <td width="220">
                    <p>29</p>
                  </td>
                  <td width="220">
                    <p>31</p>
                  </td>
                </tr>
                <tr>
                  <td width="85">
                    <p>Przedmiot</p>
                  </td>
                  <td width="220">
                    <p>Język angielski</p>
                  </td>
                  <td width="220">
                    <p>Język polski</p>
                  </td>
                  <td width="220">
                    <p>Matematyka</p>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Section>
      </Wrapper>
    </Layout>
  );
}
