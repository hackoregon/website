/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";

import { colors } from "../../_Theme/UpdatedBrandTheme";
import TitleAreaNew from "../../components/TitleAreaNew";
import DefaultTitleAreaContent from "../../components/DefaultTitleAreaContent";

const LibraryHeader = () => {
  const { contentfulHeading } = useStaticQuery(
    graphql`
      query {
        contentfulHeading(contentful_id: { eq: "5qWqKgWM7W6wPK4U1V08fF" }) {
          title
          subtitle
        }
      }
    `
  );

  return (
    <TitleAreaNew dividerLineColor={colors.purple.hex}>
      <DefaultTitleAreaContent title={contentfulHeading.title} />
    </TitleAreaNew>
  );
};

export default LibraryHeader;
