import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import SectionHeader from "../../../components/SectionHeader";

const OurDifferenceHeader = () => {
  const { allContentfulHeading } = useStaticQuery(
    graphql`
      query {
        allContentfulHeading(
          filter: { contentful_id: { eq: "28MWeFDH6UJot2shXrZ886" } }
        ) {
          edges {
            node {
              title
              subtitle
            }
          }
        }
      }
    `
  );

  return allContentfulHeading.edges.map(el => (
    <SectionHeader title={el.node.title} />
  ));
};

export default OurDifferenceHeader;
