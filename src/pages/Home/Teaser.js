/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql, Link } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import ContentContainer from "../../components/ContentContainer";
import GridSingle from "../../components/GridSingle";

const Teaser = () => {
  const { contentfulCallToActionSimple } = useStaticQuery(
    graphql`
      {
        contentfulCallToActionSimple(
          contentful_id: { eq: "4xAM1s3NoGu4eCpkLGBa27" }
        ) {
          buttonLink
          buttonTitle
          summary {
            json
          }
        }
      }
    `
  );

  const { summary, buttonLink, buttonTitle } = contentfulCallToActionSimple;

  return (
    <ContentContainer margin="sm">
      <GridSingle
        containerStyle={css`
          padding: 0 20px;
        `}
      >
        {documentToReactComponents(summary.json)}
        <Link
          to={buttonLink}
          className="btn-pink"
          css={css`
            margin-top: 20px;
          `}
        >
          <p>{buttonTitle}</p>
        </Link>
      </GridSingle>
    </ContentContainer>
  );
};

export default Teaser;
