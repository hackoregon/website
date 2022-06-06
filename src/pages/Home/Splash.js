/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";
// import { Link, useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import GridSingle from "../../components/GridSingle";
import { colors } from "../../_Theme/UpdatedBrandTheme";

const translations = {
  en: [
    "All data are created",
    "Put your principles into practice",
    "Context-Aware Systems",
    "Learn more about the metholology",
    "Discover Modules",
    "About our translations"
  ],
  sp: [
    "Todos los datos son creados",
    "Pon tus valores en práctica",
    "Sistemas sensibles al contexto",
    "Aprende más sobre la metodologia",
    "Descrubre los módulos",
    "Sobre nuestras traducciones"
  ],
  de: [
    "Alle Daten werden konstruiert",
    "Setze deine Werte in die Tat um",
    "Kontextsensitive Systeme",
    "Erfahre mehr über die Methoden",
    "Entdecke unsere Module",
    "Über unsere Übersetzungen"
  ],
  fr: [
    "Toutes les données sont construites",
    "Mettez vos valeurs en action",
    "Des systèmes sensibles au contexte",
    "En savoir plus sur la méthodologie",
    "Découvrez nos modules",
    "À propos de nos traductions"
  ],
  cat: [
    "Totes les dades són creades",
    "Posa els teus valors en pràctica",
    "Sistemes sensibles al context",
    "Aprèn més sobre la metodologia",
    "Descobreix els mòduls",
    "Sobre les nostres traduccions"
  ],
  tr: [
    "Bütün veriler insanlar tarafından oluşturulmuştur",
    "İlkelerinizi uygulamaya koyun",
    "Bağlama Duyarlı Sistemler",
    "Metodoloji hakkında daha fazla bilgi edinin",
    "Modüllerimizi keşfedin",
    "Çevirilerimiz hakkında"
  ],
  fi: [
    "Kaikki data on rakennettua",
    "Siirrä arvonne käytäntöön",
    "Kontekstitietoinen järjestelmä",
    "Lue lisää meidän menetelmistämme",
    "Meidän palvelumme",
    "Lisää käännöksistämme"
  ],
  nl: [
    "Alle gegevens worden aangemaakt",
    "Breng uw principes in de praktijk",
    "Contextbewuste Systemen",
    "Meer informatie over de methodologie",
    "Ontdek de modules",
    "Over onze vertalingen"
  ]
};

const Splash = () => {
  const [lang, setLang] = useState("en");
  // const { contentfulCallToActionBlock } = useStaticQuery(
  //   graphql`
  //     query {
  //       contentfulCallToActionBlock(
  //         contentful_id: { eq: "7AKSw2suSBvGVjfgeWze5N" }
  //       ) {
  //         tagline
  //         image {
  //           description
  //           fluid(maxWidth: 600) {
  //             srcSet
  //             sizes
  //           }
  //         }
  //       }
  //     }
  //   `
  // );

  //   const imageStyle = css`
  // marginLeft: "20px",
  // marginTop: "-40px",
  // maxWidth: "200px"
  // `;

  // const makeImage = image => (
  //   <img
  //     srcSet={image.fluid.srcSet}
  //     sizes={image.fluid.sizes}
  //     alt={image.description}
  //     css={imageStyle}
  //   />
  // );
  // const backgroundImage = contentfulCallToActionBlock.image && makeImage(contentfulCallToActionBlock.image);

  const getTranslationButtons = () => {
    return Object.keys(translations).map((language, i) => {
      return (
        <div
          type="button"
          style={{ paddingLeft: "0.3em" }}
          onClick={() => setLang(language)}
        >
          <a style={{ color: language === lang && "#DC4556" }}>
            {language.toUpperCase()}{" "}
          </a>
          {i < Object.keys(translations).length - 1 && `|    `}
        </div>
      );
    });
  };

  return (
    <GridSingle
      wideContent
      containerStyle={css`
        display: flex;
        flex-direction: row;
        background-image: url("http://images.ctfassets.net/3j4jpxgb52st/22Zy80Y0niVHX4t3DWBDKw/80dd37a269627997a7b05dc446955b3c/splash_portrait.png?w=300&h=386&q=50");
        background-repeat: no-repeat;
        background-size: 150px auto;
        background-position: left bottom;
        margin-top: 40px;
        padding-bottom: 60px;
        border-bottom: 6px solid ${colors.primary.hex};
      `}
    >
      <div
        css={css`
          margin: 20px 20px 0 20px;
          position: relative;
        `}
      >
        <h2
          css={css`
            margin-top: 0;
            margin-bottom: 1rem;
            margin-left: 140px;
            font-size: 3rem;
          `}
        >
          {translations[lang][0]}
        </h2>
        <h3
          css={css`
            margin-left: 140px;
            margin-top: 0;
          `}
        >
          {translations[lang][1]}
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            left: "150px",
            bottom: "-40px"
          }}
        >
          {translations[lang][5]}
          <div style={{ display: "flex" }}>{getTranslationButtons()}</div>
        </div>
      </div>
      <div
        css={css`
          margin: 20px 20px 0 0;
          padding-left: 40px;
          border-left: 2px solid ${colors.primary.hex};
        `}
      >
        <h2
          css={css`
            margin-top: 0;
            margin-bottom: 1rem;
            color: ${colors.pink.hex};
          `}
        >
          {translations[lang][2]}
        </h2>
        <h3
          css={css`
            margin-top: 0;
          `}
        >
          {translations[lang][3]}
        </h3>
        <Link to="/platform/" className="btn-pink">
          <p> {translations[lang][4]}</p>
        </Link>
      </div>
    </GridSingle>
  );
};

export default Splash;
