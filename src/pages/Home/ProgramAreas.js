/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import { Fragment } from "react";
import { Logo } from "@hackoregon/ui-brand";
import { colors } from "../../_Theme/UpdatedBrandTheme";
import GridSingle from "../../components/GridSingle";
import ProgramAreaBlock from "../../components/ProgramAreaBlock";

const ProgramAreas = () => {
  const { contentfulContentList } = useStaticQuery(
    graphql`
      query {
        contentfulContentList(contentful_id: { eq: "6vyp7V7ZKcX4AD9GySvECf" }) {
          content {
            ... on ContentfulCallToActionBlock {
              id
              button
              buttonLocalLink
              tagline
              summary {
                json
              }
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
              image {
                description
                fluid(maxWidth: 600) {
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

  return (
    <Fragment>
      <GridSingle
        wideContent
        containerStyle={css`
          padding-top: 60px;
        `}
      >
        <a id="programs" />
        <div
          style={{
            display: "flex",
            marginBottom: "10px"
          }}
        >
          <Logo type="squareLogo" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "20px"
            }}
          >
            <h2
              style={{
                margin: 0,
                color: colors.primary.hex
              }}
            >
              Program Areas
            </h2>
            {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
            <span
              style={{
                margin: 0,
                fontWeight: "bold",
                fontSize: "20px"
              }}
            >
              Technology as an Artifact of Collaboration 🌱
            </span>
          </div>
        </div>
        <p>
          Our team cultivates creative environments to foster discovery and
          demonstrate the potential of innovation at the intersection of
          emergent ethics.
        </p>
        <p>
          We operate across a wide range of program areas, from full-scale
          production environments, to experimental research, applied trainings,
          and conceptual art exhibitions.
        </p>
        <p>
          {" "}
          Not sure where to start? Check out our guide on{" "}
          <a href="http://www.civicsoftwarefoundation.org">getting involved</a>.
        </p>
      </GridSingle>
      <GridSingle
        containerStyle={css`
          padding-bottom: 20px;
        `}
      >
        {contentfulContentList.content.map(content => (
          <ProgramAreaBlock
            tagline={content.tagline}
            summary={content.summary && content.summary.json}
            button={content.button}
            buttonLocalLink={content.buttonLocalLink}
            image={content.image}
            extraContentTagline={content.extraContentTagline}
            extraContent={content.extraContent}
            extraContentImage={content.extraContentImage}
          />
        ))}
      </GridSingle>
    </Fragment>
  );
};

export default ProgramAreas;
