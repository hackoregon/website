/* eslint-disable graphql/template-strings */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import { Fragment, useState } from "react";
// import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Logo } from "@hackoregon/ui-brand";
import ArrowRightIcon from "@material-ui/icons/ArrowForwardIosRounded";
import {
  colors,
  mdBreak,
  smBreak,
  xsBreak
} from "../../_Theme/UpdatedBrandTheme";

const categoryMap = {
  brandPromise: "1797e17c-2e73-516a-af78-189459bfcbb7",
  workflowStrategies: "99bc9210-d0f1-57bb-86a6-89c4705248d6",
  civicPlatform: "7c6917e1-a3ef-561f-86b6-83d3fbb52327",
  fundingModel: "1b57e49b-b5c8-5e77-9b82-1ccd2162942d"
};

const makeImage = image => (
  <img
    srcSet={image.fluid.srcSet}
    sizes={image.fluid.sizes}
    alt={image.description}
  />
);

const CategoryContent = ({ title, content, image, ctaOnClick, ctaText }) => {
  const categoryImage = image && makeImage(image);

  return (
    <div
      css={css`
        color: ${colors.black};
        background: white;
        padding: 0 0px 0 40px;
        display: flex;
        max-width: 100%;
        max-height: 450px;
        overflow: hidden;
        ${xsBreak} {
          max-height: fit-content;
          padding-bottom: 20px;
          padding: 0 0px 20px;
        }
      `}
    >
      <div
        css={css`
          position: relative;
          width: 100%;
          display: flex;
          h2 {
            font-size: 40px;
            font-weight: 600;
          }
          p {
            font-size: 20px;
            font-weight: 500;
          }
          ${smBreak} {
            h2 {
              font-size: 25px;
              font-weight: 600;
            }
            p {
              font-size: 18px;
              font-weight: 500;
            }
          }
          ${xsBreak} {
            flex-direction: column-reverse;
            h2 {
              font-size: 25px;
              font-weight: 600;
            }
            img {
              height: 40px !important;
            }
          }
        `}
      >
        <div
          css={css`
            min-width: 590px;
            overflow-y: auto;
            ${mdBreak} {
              min-width: 300px;
            }
            ${smBreak} {
              min-width: unset;
            }
          `}
        >
          <div
            className="hide-mobile"
            css={css`
              display: flex;
              margin-bottom: 10px;
              align-items: center;
              ${xsBreak} {
                display: none;
              }
            `}
          >
            <Logo type="squareLogo" />
            <h2
              css={css`
                margin-left: 20px;
              `}
            >
              {title}
            </h2>
          </div>
          <div
            className="aboutSection"
            css={css`
              padding-right: 30px;
              ${xsBreak} {
                padding: 0px 20px;
              }
            `}
          >
            {documentToReactComponents(content)}
            <div style={{ display: "flex" }}>
              <a
                css={css`
                  margin-top: 20px;
                  padding: 7px 20px;
                  background-color: black;
                  color: white;
                  border: 5px solid black;
                  font-size: 23px;
                  font-weight: 600;
                  border-radius: 3px;
                  &:hover,
                  &:focus {
                    color: black;
                    background-color: white;
                    background-size: 0% 0%;
                  }
                `}
                href={ctaOnClick}
                target="_blank"
                rel="noreferrer"
              >
                {ctaText}
              </a>
            </div>
          </div>
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
            ${xsBreak} {
              flex-direction: column;
              margin-top: 20px;
              justify-content: center;
              img:not(#civic-logo) {
                width: 100%;
                height: auto !important;
                max-width: 70vw;
              }
            }
          `}
        >
          <div
            className="hide-desktop"
            css={css`
              display: none;
              ${xsBreak} {
                display: flex;
                margin-bottom: 10px;
                align-items: center;
              }
            `}
          >
            <Logo id="civic-logo" type="squareLogo" />
            <h2 style={{ marginLeft: "20px" }}>{title}</h2>
          </div>
          {categoryImage}
        </div>
      </div>
    </div>
  );
};
// see AboutBlock for contentful option
const AboutSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("brandPromise");

  const { contentfulContentList } = useStaticQuery(
    graphql`
      query {
        contentfulContentList(contentful_id: { eq: "75b0gvStvQr8lG3upiW1bu" }) {
          content {
            ... on ContentfulCallToActionBlock {
              id
              button
              buttonLocalLink
              buttonExternalLink
              tagline
              extraContentTagline
              extraContent {
                json
              }
              extraContentImage {
                description
                fluid(maxHeight: 200) {
                  srcSet
                  sizes
                }
              }
              summary {
                json
              }
              image {
                description
                fluid(maxWidth: 400) {
                  srcSet
                  sizes
                }
              }
            }
          }
        }
      }
    `
  );

  const categories = contentfulContentList.content;

  const getCategoryData = () => {
    return categories.filter(
      category => category.id === categoryMap[selectedCategory]
    )[0];
  };

  return (
    <Fragment>
      <a id="about" />
      <div
        wideContent
        css={css`
          max-width: 1500px;
          margin: 0 auto;
          color: ${colors.black};
          display: grid;
          grid-template-columns: 180px auto;
          height: 450px;
          border-bottom: 3px solid black;
          ${xsBreak} {
            display: flex;
            flex-direction: column;
            height: auto;
            margin-top: 0px;
        `}
      >
        <div className="about-sidebar">
          <div
            className={
              selectedCategory === "brandPromise"
                ? `sidebar-item sidebar-item-selected`
                : "sidebar-item"
            }
            onClick={() => setSelectedCategory("brandPromise")}
          >
            <ArrowRightIcon
              htmlColor={colors.black}
              className={selectedCategory === "brandPromise" && "arrow-down"}
            />
            <span style={{ alignSelf: "center" }}>Brand Promise</span>
          </div>
          <div
            className={
              selectedCategory === "workflowStrategies"
                ? `sidebar-item sidebar-item-selected`
                : "sidebar-item"
            }
            onClick={() => setSelectedCategory("workflowStrategies")}
          >
            <ArrowRightIcon
              htmlColor={colors.black}
              className={
                selectedCategory === "workflowStrategies" && "arrow-down"
              }
            />
            <span style={{ alignSelf: "center" }}>Workflow Strategies</span>
          </div>
          <div
            className={
              selectedCategory === "civicPlatform"
                ? `sidebar-item sidebar-item-selected`
                : "sidebar-item"
            }
            onClick={() => setSelectedCategory("civicPlatform")}
          >
            <ArrowRightIcon
              htmlColor={colors.black}
              className={selectedCategory === "civicPlatform" && "arrow-down"}
            />
            <span style={{ alignSelf: "center" }}>CIVIC Platform</span>
          </div>
          <div
            className={
              selectedCategory === "fundingModel"
                ? `sidebar-item sidebar-item-selected`
                : "sidebar-item"
            }
            onClick={() => setSelectedCategory("fundingModel")}
          >
            <ArrowRightIcon
              htmlColor={colors.black}
              className={selectedCategory === "fundingModel" && "arrow-down"}
            />
            <span style={{ alignSelf: "center" }}>Funding Model</span>
          </div>
        </div>
        <CategoryContent
          title={getCategoryData().tagline}
          content={getCategoryData().summary && getCategoryData().summary.json}
          image={getCategoryData().image}
          ctaText={getCategoryData().button}
          ctaOnClick={getCategoryData().buttonExternalLink}
        />
      </div>
    </Fragment>
  );
};

export default AboutSection;
