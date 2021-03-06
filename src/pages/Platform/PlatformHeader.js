/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";

import { colors } from "../../_Theme/UpdatedBrandTheme";
import TitleAreaNew from "../../components/TitleAreaNew";
import DefaultTitleAreaContent from "../../components/DefaultTitleAreaContent";

const PlatformHeader = () => {
  const { contentfulHeading } = useStaticQuery(
    graphql`
      query {
        contentfulHeading(contentful_id: { eq: "5e9eWbUqWY0lhyF9TRiSmh" }) {
          title
          subtitle
        }
      }
    `
  );

  return (
    <TitleAreaNew dividerLineColor={colors.purple.hex}>
      <DefaultTitleAreaContent
        subtitle={contentfulHeading.subtitle}
        title={contentfulHeading.title}
      />
    </TitleAreaNew>
  );
};

export default PlatformHeader;
