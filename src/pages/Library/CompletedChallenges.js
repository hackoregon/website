/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import { Fragment } from "react";

import SectionHeader from "../../components/SectionHeader";
import GridSingle from "../../components/GridSingle";
import Challenge from "../../components/Challenge";

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
    <Fragment>
      <SectionHeader
        title={contentfulHeading.title}
        summary={contentfulHeading.summary.json}
        center
      />
      <GridSingle containerStyle="padding: 0 1rem; margin-bottom: 6rem;">
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
      </GridSingle>
    </Fragment>
  );
};

export default CompletedChallenges;
