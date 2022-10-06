/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import {
  colors,
  minXlBreak,
  smBreak,
  xsBreak
} from "../../_Theme/UpdatedBrandTheme";

const translations = {
  en: {
    title: "All Data Are Created.",
    description:
      "Put your principles into practice and discover content-aware systems",
    btn1: {
      title: "Modules",
      link:
        "https://www.notion.so/civicsoftware/Discover-Modules-2abcaab27879405e9eab0e3320a6eaf8"
    },
    btn2: {
      title: "Workshops",
      link:
        "https://www.notion.so/civicsoftware/Workshops-fafe0d736bee4becba44b4292508b14c"
    },
    btn3: {
      title: "Applied Work",
      link:
        "https://www.notion.so/civicsoftware/CIVIC-Collaboration-Studio-99964cbd21794140b50d2ea7f7c32d36"
    }
  },
  sp: {
    title: "Todos los datos son creados",
    description:
      "Pon tus valores en práctica y descubre sistemas sensibles al contexto",
    btn1: {
      title: "Modules",
      link:
        "https://www.notion.so/civicsoftware/Discover-Modules-2abcaab27879405e9eab0e3320a6eaf8"
    },
    btn2: {
      title: "Workshops",
      link:
        "https://www.notion.so/civicsoftware/Workshops-fafe0d736bee4becba44b4292508b14c"
    },
    btn3: {
      title: "Applied Work",
      link:
        "https://www.notion.so/civicsoftware/CIVIC-Collaboration-Studio-99964cbd21794140b50d2ea7f7c32d36"
    }
  },
  de: {
    title: "Alle Daten werden konstruiert",
    description:
      "Setze deine Werte in die Tat um und entdecke kontextsensitive systeme",
    btn1: {
      title: "Modules",
      link:
        "https://www.notion.so/civicsoftware/Discover-Modules-2abcaab27879405e9eab0e3320a6eaf8"
    },
    btn2: {
      title: "Workshops",
      link:
        "https://www.notion.so/civicsoftware/Workshops-fafe0d736bee4becba44b4292508b14c"
    },
    btn3: {
      title: "Applied Work",
      link:
        "https://www.notion.so/civicsoftware/CIVIC-Collaboration-Studio-99964cbd21794140b50d2ea7f7c32d36"
    }
  },
  fr: {
    title: "Toutes les données sont construites",
    description:
      "Mettez vos valeurs en action et découvrez des systèmes sensibles au contexte",
    btn1: {
      title: "Modules",
      link:
        "https://www.notion.so/civicsoftware/Discover-Modules-2abcaab27879405e9eab0e3320a6eaf8"
    },
    btn2: {
      title: "Workshops",
      link:
        "https://www.notion.so/civicsoftware/Workshops-fafe0d736bee4becba44b4292508b14c"
    },
    btn3: {
      title: "Applied Work",
      link:
        "https://www.notion.so/civicsoftware/CIVIC-Collaboration-Studio-99964cbd21794140b50d2ea7f7c32d36"
    }
  },
  nl: {
    title: "Alle gegevens worden aangemaakt",
    description:
      "Breng uw principes in de praktijk en ontdek contextbewuste systemen",
    btn1: {
      title: "Modules",
      link:
        "https://www.notion.so/civicsoftware/Discover-Modules-2abcaab27879405e9eab0e3320a6eaf8"
    },
    btn2: {
      title: "Workshops",
      link:
        "https://www.notion.so/civicsoftware/Workshops-fafe0d736bee4becba44b4292508b14c"
    },
    btn3: {
      title: "Applied Work",
      link:
        "https://www.notion.so/civicsoftware/CIVIC-Collaboration-Studio-99964cbd21794140b50d2ea7f7c32d36"
    }
  },
  cat: {
    title: "Totes les dades són creades",
    description:
      "Posa els teus valors en pràctica i descobreix sistemes sensibles al context",
    btn1: {
      title: "Modules",
      link:
        "https://www.notion.so/civicsoftware/Discover-Modules-2abcaab27879405e9eab0e3320a6eaf8"
    },
    btn2: {
      title: "Workshops",
      link:
        "https://www.notion.so/civicsoftware/Workshops-fafe0d736bee4becba44b4292508b14c"
    },
    btn3: {
      title: "Applied Work",
      link:
        "https://www.notion.so/civicsoftware/CIVIC-Collaboration-Studio-99964cbd21794140b50d2ea7f7c32d36"
    }
  },
  fi: {
    title: "Kaikki data on rakennettua",
    description:
      "Siirrä arvonne käytäntöön ja ota meidän kontekstitietoisesta järjestelmästä",
    btn1: {
      title: "Modules",
      link:
        "https://www.notion.so/civicsoftware/Discover-Modules-2abcaab27879405e9eab0e3320a6eaf8"
    },
    btn2: {
      title: "Workshops",
      link:
        "https://www.notion.so/civicsoftware/Workshops-fafe0d736bee4becba44b4292508b14c"
    },
    btn3: {
      title: "Applied Work",
      link:
        "https://www.notion.so/civicsoftware/CIVIC-Collaboration-Studio-99964cbd21794140b50d2ea7f7c32d36"
    }
  },
  tr: {
    title: "Bütün veriler insanlar tarafından oluşturulmuştur",
    description:
      "İlkelerinizi uygulamaya koyun ve bağlama duyarlı sistemleri keşfedin",
    btn1: {
      title: "Modules",
      link:
        "https://www.notion.so/civicsoftware/Discover-Modules-2abcaab27879405e9eab0e3320a6eaf8"
    },
    btn2: {
      title: "Workshops",
      link:
        "https://www.notion.so/civicsoftware/Workshops-fafe0d736bee4becba44b4292508b14c"
    },
    btn3: {
      title: "Applied Work",
      link:
        "https://www.notion.so/civicsoftware/CIVIC-Collaboration-Studio-99964cbd21794140b50d2ea7f7c32d36"
    }
  }
};

const Landing = () => {
  const [lang, setLang] = useState("en");

  const getTranslationButtons = () => {
    return Object.keys(translations).map((language, i) => {
      return (
        <div
          type="button"
          css={css`
            padding-left: 0.3em;
            ont-size: 14px;
            ${smBreak} {
              font-size: 12px;
            }
          `}
          onClick={() => setLang(language)}
          key={language}
        >
          <a
            style={{
              fontWeight: 500,
              color: language === lang ? "white" : colors.primary.hex,
              backgroundColor: language === lang && colors.primary.hex
            }}
          >
            {language.toUpperCase()}
          </a>
          {i < Object.keys(translations).length - 1 && ` | `}
        </div>
      );
    });
  };

  const Item = ({ item }) => (
    <div
      css={css`
        display: grid;
        width: 100%;
        ${xsBreak} {
          display: flex;
          flex-direction: column;
          height: 570px;
        }
        ${minXlBreak} {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}
    >
      <div
        css={css`
          padding-left: 280px;
          padding-top: 45px;
          ${xsBreak} {
            border-left: none;
            padding-left: 0px;
            padding-top: 0px;
          }
          ${minXlBreak} {
            width: auto;
          }
        `}
      >
        <h2
          css={css`
            font-size: 60px;
            font-weight: 400;
            margin-top: 5px;
            margin-bottom: 1rem;
            color: ${colors.primary.hex};
            ${smBreak} {
              font-size: 40px;
              font-weight: 400;
              margin-left: 10px;
              margin-bottom: 0px;
            }
          `}
        >
          {item.title}
        </h2>
        <p
          css={css`
            padding-top: 10px;
            margin-left: 163px;
            margin-bottom: 1rem;
            font-size: 20px;
            font-weight: 500;
            color: ${colors.primary.hex};
            max-width: 400px;
            ${smBreak} {
              font-size: 18px;
              font-weight: 500;
              margin-left: 65px;
              padding-top: 0px;
              max-width: unset;
            }
            ${minXlBreak} {
              margin-left: 0px;
            }
          `}
        >
          {item.description}
        </p>

        <div
          css={css`
            margin-top: 40px;
            margin-left: 170px;
            a,
            svg {
              color: ${colors.primary.hex} !important;
            }
            ${smBreak} {
              margin-left: 165px;
              margin-top: 15px;
            }
            ${minXlBreak} {
              margin-left: 0px;
            }
          `}
        >
          <a target="_blank" rel="noreferrer" href={item.btn1.link}>
            <div
              style={{
                marginBottom: "18px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <ArrowForwardIosRoundedIcon
                style={{
                  fontSize: 20,
                  color: colors.primary.hex
                }}
              />
              <h3
                style={{
                  color: colors.primary.hex,
                  margin: "0 0 0 10px",
                  fontSize: 20,
                  fontWeight: 600
                }}
              >
                {item.btn1.title}
              </h3>
            </div>
          </a>
          <a target="_blank" rel="noreferrer" href={item.btn2.link}>
            <div
              style={{
                marginBottom: "18px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <ArrowForwardIosRoundedIcon
                style={{
                  fontSize: 20,
                  color: colors.primary.hex
                }}
              />
              <h3
                style={{
                  color: colors.primary.hex,
                  margin: "0 0 0 10px",
                  fontSize: 20,
                  fontWeight: 600
                }}
              >
                {item.btn2.title}
              </h3>
            </div>
          </a>
          <a target="_blank" rel="noreferrer" href={item.btn3.link}>
            <div
              style={{
                marginBottom: "18px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <ArrowForwardIosRoundedIcon
                style={{
                  fontSize: 20,
                  color: colors.primary.hex
                }}
              />
              <h3
                style={{
                  color: colors.primary.hex,
                  margin: "0 0 0 10px",
                  fontSize: 20,
                  fontWeight: 600
                }}
              >
                {item.btn3.title}
              </h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        flex: 1;
        max-width: 100%;
        margin-top: 0px;
        padding-bottom: 40px;
        padding-left: 165px;
        justify-content: space-between;
        background-image: url("http://images.ctfassets.net/3j4jpxgb52st/22Zy80Y0niVHX4t3DWBDKw/80dd37a269627997a7b05dc446955b3c/splash_portrait.png?w=300&h=386&q=50");
        background-repeat: no-repeat;
        background-size: 440px auto;
        background-position: 0px calc(100% + 30px);
        min-height: 660px;
        ${smBreak} {
          border-left: none;
          padding-left: 20px;
          padding-top: 10px;
          padding-bottom: 0px;
          margin-top: 0px;
          background-image: url("http://images.ctfassets.net/3j4jpxgb52st/22Zy80Y0niVHX4t3DWBDKw/80dd37a269627997a7b05dc446955b3c/splash_portrait.png?w=300&h=386&q=50");
          background-repeat: no-repeat;
          background-size: 292px auto;
          background-position: -70px calc(100% + 30px);
          min-height: 700px;
        }
      `}
    >
      <div
        css={css`
          padding-top: 80px;
          ${smBreak} {
            padding-top: 0px;
          }
        `}
      >
        <Carousel
          next={next => setLang(Object.keys(translations)[next])}
          prev={prev => setLang(Object.keys(translations)[prev])}
          index={Object.keys(translations).findIndex(key => key === lang)}
          interval={10000}
          indicators={false}
        >
          {Object.keys(translations).map(language => (
            <React.Fragment key={`item-${language}`}>
              <Item item={translations[language]} />
            </React.Fragment>
          ))}
        </Carousel>
      </div>
      <div
        css={css`
          display: flex;
          align-self: flex-end;
          justify-self: flex-end;
          flex-direction: column;
          margin-right: 12px;
          ${smBreak} {
            margin-right: 6px;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-right: 40px;
            ${smBreak} {
              margin-right: 10px;
              #arrow-link {
                font-size: 8px !important;
              }
            }
          `}
        >
          <a
            target="_blank"
            rel="noreferrer"
            css={css`
              margin: 0;
              text-decoration: underline;
              font-size: 18px;
              font-weight: 500;
              color: black;
              ${smBreak} {
                font-size: 12px;
              }
              &:hover {
                background-size: 0% 0px;
                color: black;
              }
            `}
            href="https://www.notion.so/civicsoftware/Translations-b5460fe4f30b49dd81bba17978602fa9"
          >
            About these translations
          </a>
          <ArrowForwardIosRoundedIcon
            id="arrow-link"
            style={{
              fontSize: 14
            }}
          />
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: row;
            ${smBreak} {
              padding-bottom: 20px;
            }
          `}
        >
          {getTranslationButtons()}
        </div>
      </div>
    </div>
  );
};

export default Landing;
