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
    <div>
      <CallToActionBlock
        tagline="CIVIC Platform"
        summary={content.summary && content.summary.json}
        button={content.button}
        buttonLocalLink={content.buttonLocalLink}
        image={content.image}
        reverseLayout={i % 2 === 0}
        buttonColor={colorOrder[i]}
        noDivider
        wrapperCss={css`
          background-color: white;
        `}
      />
      <CallToActionBlock
        tagline="Open Elections"
        summary={content.summary && content.summary.json}
        button={content.button}
        buttonLocalLink={content.buttonLocalLink}
        image={content.image}
        reverseLayout={false}
        buttonColor={colorOrder[i]}
        noDivider
        wrapperCss={css`
          background-color: white;
        `}
      />
    </div>
  ));
};

export default CallToActionBlocks;
