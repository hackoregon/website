/* eslint-disable react/prop-types */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import CallToActionBlock from "../../components/CallToActionBlock";

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

  return contentfulContentList.content.slice(0, -1).map((content, i) => (
    <CallToActionBlock
      tagline={content.tagline}
      summary={content.summary && content.summary.json}
      button={content.button}
      buttonLocalLink={content.buttonLocalLink}
      image={content.image}
      reverseLayout={i % 2 === 0}
      buttonColor={colorOrder[i]}
      dividerColor={colorOrder[i + 1]}
      big
      wrapperCss={css`
        background-color: white;
      `}
    />
  ));
};

export default CallToActionBlocks;
