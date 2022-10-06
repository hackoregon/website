/* eslint-disable react/prop-types */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import CallToActionBlock from "../../../components/CallToActionBlock";
import ContentContainer from "../../../components/ContentContainer";
import SectionHeader from "../../../components/SectionHeader";

const colorOrder = ["yellow", "pink", "green", "blue"];

const CallToActionBlocks = () => {
  const { contentfulContentList } = useStaticQuery(
    graphql`
      query {
        contentfulContentList(contentful_id: { eq: "1o8nWAMQMk6Qsziv9SkwRe" }) {
          content {
            ... on ContentfulCallToActionBlock {
              id
              button
              buttonLocalLink
              tagline
              summary {
                json
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
    <ContentContainer margin="md">
      {/* eslint-disable-next-line */}
      <a id="cohorts" />
      <SectionHeader
        title="Featured Cohorts"
        wideContent
        css={css`
          margin-bottom: -60px;
        `}
      />
      {contentfulContentList.content.map((content, i) => (
        <CallToActionBlock
          tagline={content.tagline}
          summary={content.summary && content.summary.json}
          // button={content.button}
          // buttonLocalLink={content.buttonLocalLink}
          image={content.image}
          reverseLayout={i % 2 === 0}
          buttonColor={colorOrder[i]}
          noDivider
          wrapperCss={css`
            background-color: white;
          `}
        />
      ))}
      ;
    </ContentContainer>
  );
};

export default CallToActionBlocks;
