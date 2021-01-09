/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";

import SectionHeader from "../../components/SectionHeader";
import Challenge from "../../components/Challenge";
import ContentContainer from "../../components/ContentContainer";

const CompletedChallenges = () => {
  const { allContentfulChallenge, contentfulHeading } = useStaticQuery(
    graphql`
      {
        contentfulHeading(contentful_id: { eq: "vHSpohuoxFbfwFCdvcfZr" }) {
          title
          summary {
            json
          }
        }
        allContentfulChallenge(
          filter: { completed: { eq: true } }
          sort: { fields: date, order: DESC }
        ) {
          edges {
            node {
              title
              tags
              time
              date
              summary {
                json
              }
              outcomes
              applicants
              slug
            }
          }
        }
      }
    `
  );

  return (
    <div
      css={css`
        margin: 0 auto 6rem auto;
        max-width: 900px;
      `}
    >
      <SectionHeader
        title={contentfulHeading.title}
        summary={contentfulHeading.summary.json}
        center
      />
      <ContentContainer>
        {allContentfulChallenge.edges.slice(0, 10).map(({ node }) => (
          <Challenge
            title={node.title}
            tags={node.tags}
            time={node.time}
            date={node.date}
            summary={node.summary.json}
            outcomes={node.outcomes}
            applicants={node.applicants}
            slug={node.slug}
            completed
          />
        ))}
      </ContentContainer>
    </div>
  );
};

export default CompletedChallenges;
