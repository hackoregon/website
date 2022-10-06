/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";

import PageLayout from "../components/PageLayout";
// import TitleAreaNew from "../components/TitleAreaNew";
// import DefaultTitleAreaContent from "../components/DefaultTitleAreaContent";
import DividerLine from "../components/DividerLine";
import ContentContainer from "../components/ContentContainer";
// import hackOregonTeam from "../images/team.png";
import { colors } from "../_Theme/UpdatedBrandTheme";
import Staff from "./About/Staff";
import StaffNote from "./About/StaffNote";
import Organization from "./About/Organization";

const About = () => {
  // eslint-disable react-hooks/rules-of-hooks
  const { contentfulHeading, contentfulCallToActionBlock } = useStaticQuery(
    graphql`
      query {
        contentfulHeading(contentful_id: { eq: "29hwKSc4FX6b1sM8ydG5EX" }) {
          id
          title
          subtitle
        }
        contentfulCallToActionBlock(
          contentful_id: { eq: "3crcjqHYZc2g6Avzs4xENL" }
        ) {
          tagline
          summary {
            json
          }
        }
      }
    `
  );

  return (
    <PageLayout
      title={contentfulHeading.title}
      keywords={[`Civic Software Foundation`, `CIVIC Platform`]}
    >
      {/* TODO: Add back team pic */}
      {/* <TitleAreaNew dividerLineColor={colors.green.hex}>
        <DefaultTitleAreaContent
          subtitle={contentfulHeading.subtitle}
          title={contentfulHeading.title}
        />
      </TitleAreaNew> */}
      {/* <ContentContainer margin="md">
        <FeaturedPost />
      </ContentContainer>
      <DividerLine hexColor={colors.blue.hex} /> */}
      <ContentContainer margin="md">
        <Organization
          contentfulCallToActionBlock={contentfulCallToActionBlock}
        />
      </ContentContainer>
      <DividerLine hexColor={colors.pink.hex} />
      <ContentContainer margin="md">
        <Staff />
        <StaffNote />
      </ContentContainer>
      <DividerLine hexColor={colors.blue.hex} />
    </PageLayout>
  );
};

export default About;
