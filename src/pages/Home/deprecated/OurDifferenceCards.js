/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import GridList from "../../../components/GridList";
import GridListMap from "../../../components/GridListMap";

const OurDifferenceCards = () => {
  const { contentfulContentList } = useStaticQuery(
    graphql`
      query {
        contentfulContentList(contentful_id: { eq: "3GwkbpioeQXOQPRF0sZNz7" }) {
          content {
            ... on ContentfulCallToActionBlock {
              id
              button
              tagline
              summary {
                json
              }
            }
          }
        }
      }
    `
  );

  return (
    <GridList shrinkToColumn>
      <GridListMap callToActionBlockList={contentfulContentList.content} />
    </GridList>
  );
};

export default OurDifferenceCards;
