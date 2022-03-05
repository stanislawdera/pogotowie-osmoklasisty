import { Card } from "components/atoms/Card/Card.styles";
import { Headline } from "components/atoms/Headline/Headline.styles";
import { Paragraph } from "components/atoms/Paragraph/Paragraph.styles";
import { Subheadline } from "components/atoms/Subheadline/Subheadline.styles";
import { Wrapper } from "components/atoms/Wrapper/Wrapper.styles";
import Layout from "components/organisms/Layout/Layout";
import Head from "next/head";
import React from "react";

export default function Faq() {
  return (
    <Layout title="FAQ" content="Najczęściej zadawane pytania">
      <Head>
        <title>FAQ - Pogotowie Ósmoklasisty</title>
        <meta
          name="description"
          content="Najczęściej zadawane pytania dotyczące kursu"
        />
      </Head>
      <Wrapper>
        <Card>
          <Subheadline>Ile kosztuje udział w zajęciach?&nbsp;</Subheadline>
          <Paragraph>
            Udział w zajęciach jest bezpłatny. Jednak ograniczona jest liczba
            miejsc. Zapisać na kurs może się jedynie 60 os&oacute;b.&nbsp;
          </Paragraph>
        </Card>

        <Card>
          <Subheadline>
            Jak można się skontaktować z organizatorami?
          </Subheadline>
          <Paragraph>
            Najlepiej skontaktować się drogą elektroniczną wysyłając wiadomość
            na adres e-mail <strong>kontakt@pogotowie8klasisty.pl</strong>.
          </Paragraph>
        </Card>

        <Card>
          <Subheadline>
            Zapisałem/am się na zajęcia, ale nie odpowiadają mi terminy. Jak
            mogę się wypisać?&nbsp;
          </Subheadline>
          <Paragraph>
            Najlepiej drogą elektroniczną, wysyłając wiadomość o treści:
          </Paragraph>
          <Paragraph>
            <em>[Imię i Nazwisko]</em> rezygnuję z zajęć prowadzonych w ramach
            projektu pogotowie egzaminacyjne &oacute;smoklasisty.&nbsp;
          </Paragraph>
          <Paragraph>
            na adres e-mail <strong>kontakt@pogotowie8klasisty.pl</strong>.
          </Paragraph>
          <Paragraph>
            Administrator kursu przeprowadzi potem weryfikację tej
            rezygnacji.&nbsp;
          </Paragraph>
        </Card>

        <Card>
          <Subheadline>
            Nie mieszkam w Chorzowie. Czy mimo to mogę uczestniczyć w
            zajęciach?&nbsp;
          </Subheadline>
          <Paragraph>
            Tak. Projekt przeznaczony zar&oacute;wno dla mieszkańc&oacute;w
            Chorzowa oraz os&oacute;b z tym miastem związanych (chodzisz do
            jednej z chorzowskich szk&oacute;ł, Twoi rodzice pracują w Chorzowie
            lub zamierzasz przyjść do chorzowskiej szkoły
            ponadpodstawowej)&nbsp;
          </Paragraph>
        </Card>

        <Card>
          <Subheadline>
            Kiedy rozpocznie i zakończy się akcja?&nbsp;
          </Subheadline>
          <Paragraph>
            22 marca odbędzie się spotkanie organizacyjne - szczeg&oacute;ły
            zostaną wysłane mailem po zapisaniu.
          </Paragraph>
          <Paragraph>
            Pierwsze zajęcia odbędą się 29 marca, a ostatnie 17 maja.
          </Paragraph>
        </Card>

        <Card>
          <Subheadline>Na czym polega projekt?&nbsp;</Subheadline>
          <Paragraph>
            60 uczni&oacute;w klas &oacute;smych będzie mogło uczestniczyło w
            zajęciach z przedmiot&oacute;w egzaminacyjnych: z języka polskiego,
            matematyki oraz języka angielskiego. Celem kursu jest przygotowanie
            do egzaminu &oacute;smoklasisty - nie będziemy skupiali się jedynie
            na wiedzy - duży nacisk będzie położony na strategie
            egzaminacyjne.&nbsp;
          </Paragraph>
        </Card>

        <Card>
          <Subheadline>
            Czy trzeba uczestniczyć we wszystkich zajęciach (np. chcę chodzić
            tylko na polski)?&nbsp;
          </Subheadline>
          <Paragraph>
            Tak. Deklarując uczestnictwo w zajęciach decydujemy się na wszystkie
            przedmioty.
          </Paragraph>
        </Card>
      </Wrapper>
    </Layout>
  );
}
