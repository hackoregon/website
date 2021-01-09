/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";

import SectionHeader from "../../components/SectionHeader";
import Challenge from "../../components/Challenge";
import ContentContainer from "../../components/ContentContainer";

const Challenges = () => {
  const { allContentfulChallenge, contentfulHeading } = useStaticQuery(
    graphql`
      {
        contentfulHeading(contentful_id: { eq: "3ArSDhlLmIZKwNxNDONjuM" }) {
          title
          summary {
            json
          }
        }
        allContentfulChallenge(
          filter: { completed: { ne: true } }
          sort: { fields: date, order: ASC }
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
              completed
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
        {allContentfulChallenge.edges.slice(0, 3).map(({ node }) => (
          <Challenge
            title={node.title}
            tags={node.tags}
            time={node.time}
            date={node.date}
            summary={node.summary.json}
            outcomes={node.outcomes}
            applicants={node.applicants}
            slug={node.slug}
          />
        ))}
      </ContentContainer>
    </div>
  );
};

export default Challenges;
