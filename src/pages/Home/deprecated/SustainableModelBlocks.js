/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import { Fragment } from "react";

import CallToActionBlock from "../../../components/CallToActionBlock";
import DividerLine from "../../../components/DividerLine";
import { xsBreak, smBreak } from "../../../_Theme/UpdatedBrandTheme";

const contentGrid = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 70px;
  ${smBreak} {
    grid-column-gap: 30px;
  }
  ${xsBreak} {
    grid-template-columns: 1fr;
    grid-column-gap: 0;
  }
`;

const colorOrder = ["yellow", "pink"];

const CallToActionBlocks = () => {
  const { contentfulContentList } = useStaticQuery(
    graphql`
      query {
        contentfulContentList(contentful_id: { eq: "3JkQZHYqccY7YiLxXH3CC9" }) {
          content {
            ... on ContentfulCallToActionBlock {
              button
              buttonLocalLink
              tagline
              summary {
                json
              }
            }
          }
          title
          subtitle {
            subtitle
          }
          image {
            description
            fluid {
              srcSet
              sizes
            }
          }
        }
      }
    `
  );

  const { image } = contentfulContentList;

  return (
    <Fragment>
      <div
        css={css`
          position: absolute;
          width: 100%;
          text-align: center;
        `}
      >
        <img
          srcSet={image.fluid.srcSet}
          sizes={image.fluid.sizes}
          alt={image.description}
          css={css`
            opacity: 0.5;
            position: relative;
            z-index: -1;
          `}
        />
      </div>
      <div
        css={css`
          max-width: 1100px;
          margin: 0 auto;
          padding: 2.5rem 70px 2rem;
          ${smBreak} {
            padding: 2.5rem 35px 2rem;
          }
        `}
      >
        <h2
          className="h-1"
          css={css`
            margin: 0;
          `}
        >
          {contentfulContentList.title}
        </h2>
        <h3
          css={css`
            margin-top: 40px;
          `}
        >
          {contentfulContentList.subtitle.subtitle}
        </h3>
        <div css={contentGrid}>
          {contentfulContentList.content.map((content, i) => (
            <CallToActionBlock
              tagline={content.tagline}
              summary={content.summary && content.summary.json}
              button={content.button}
              buttonLocalLink={content.buttonLocalLink}
              buttonColor={colorOrder[i]}
              noDivider
              wrapperCss={css`
                display: inline-grid;
                ${xsBreak} {
                  display: grid;
                }
              `}
              pair
            />
          ))}
        </div>
      </div>
      <DividerLine hexColor={colorOrder[1]} />
    </Fragment>
  );
};

export default CallToActionBlocks;
