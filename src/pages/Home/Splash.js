/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Modal } from "@material-ui/core";
import GridSingle from "../../components/GridSingle";
import { colors, xsBreak } from "../../_Theme/UpdatedBrandTheme";

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

const imageStyle = css`
  grid-area: image;
  width: 350px;
  max-width: 40vw;

  ${xsBreak} {
    width: 100%;
    max-width: 400px;
  }
`;

const makeImage = image => (
  <img
    srcSet={image.fluid.srcSet}
    sizes={image.fluid.sizes}
    alt={image.description}
    css={imageStyle}
  />
);

const Splash = () => {
  const [lang, setLang] = useState("en");

  const [showDetailPopover, setShowDetailPopover] = useState(false);

  const toggleDetailPopover = () => {
    setShowDetailPopover(!showDetailPopover);
  };

  const { contentfulCallToActionBlock } = useStaticQuery(
    graphql`
      query {
        contentfulCallToActionBlock(
          contentful_id: { eq: "6EY0rIjUPU5680BJ9c622k" }
        ) {
          tagline
          summary {
            json
          }
          extraContentTagline
          extraContent {
            json
          }
          extraContentButton1
          extraContentButton1ExternalLink
          extraContentButton2
          extraContentButton2ExternalLink
        }
      }
    `
  );

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
        max-width: 100%;
        display: flex;
        flex-direction: row;
        background-image: url("http://images.ctfassets.net/3j4jpxgb52st/22Zy80Y0niVHX4t3DWBDKw/80dd37a269627997a7b05dc446955b3c/splash_portrait.png?w=300&h=386&q=50");
        background-repeat: no-repeat;
        background-size: 150px auto;
        background-position: left bottom;
        margin-top: 100px;
        padding-bottom: 60px;
        justify-content: center;
        border-bottom: 6px solid ${colors.primary.hex};
        ${xsBreak} {
          display: none;
        }
      `}
    >
      <Modal id="modal" open={showDetailPopover} onClose={toggleDetailPopover}>
        <div
          css={css`
            color: ${colors.primary.hex};
            background: ${colors.white};
            outline: 0;
            position: absolute;
            top: 30%;
            left: 50%;
            transform: translate(-50%, -30%);
            width: 70vw;
            padding: 40px;
            display: flex;
            flex-direction: column;
            max-height: 70vh;
            overflow-y: scroll;
          `}
        >
          <h2 style={{ marginLeft: "20px" }}>
            {contentfulCallToActionBlock.extraContentTagline}
          </h2>
          <div style={{ textAlign: "center" }}>
            {contentfulCallToActionBlock.extraContentImage &&
              makeImage(contentfulCallToActionBlock.extraContentImage)}
          </div>
          <div style={{ marginTop: "30px", paddingRight: "30px" }}>
            {documentToReactComponents(
              contentfulCallToActionBlock.extraContent &&
                contentfulCallToActionBlock.extraContent.json
            )}
          </div>
          <div
            css={css`
              margin-top: 20px;
              display: flex;
              gap: 20px;
              ${xsBreak} {
                flex-direction: column;
              }
            `}
          >
            {contentfulCallToActionBlock.extraContentButton1 && (
              <Link
                to={contentfulCallToActionBlock.extraContentButton1ExternalLink}
                className="btn-green"
              >
                <p>{contentfulCallToActionBlock.extraContentButton1}</p>
              </Link>
            )}
            {contentfulCallToActionBlock.extraContentButton2 && (
              <Link
                to={contentfulCallToActionBlock.extraContentButton2ExternalLink}
                className="btn-green"
              >
                <p>{contentfulCallToActionBlock.extraContentButton2}</p>
              </Link>
            )}
          </div>
        </div>
      </Modal>
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
            color: #000;
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
            color: #000;
          `}
        >
          {translations[lang][3]}
        </h3>

        <div
          type="button"
          className="btn-pink"
          style={{
            marginTop: "2rem"
          }}
          onClick={toggleDetailPopover}
        >
          <p> {translations[lang][4]}</p>
        </div>
      </div>
    </GridSingle>
  );
};

export default Splash;
