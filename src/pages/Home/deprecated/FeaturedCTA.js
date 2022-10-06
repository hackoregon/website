/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql, Link } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Logo } from "@hackoregon/ui-brand";
import options from "../../../_Common/contentfulOptions";
import GridSingle from "../../../components/GridSingle";

const FeaturedCTA = () => {
  const { contentfulFeaturedCallToAction } = useStaticQuery(
    graphql`
      {
        contentfulFeaturedCallToAction(location: { eq: "home" }) {
          id
          callToAction {
            tagline
            summary {
              json
            }
            buttonTitle
            buttonLink
          }
        }
      }
    `
  );

  return (
    <GridSingle
      containerStyle={css`
        padding: 0 20px;
      `}
    >
      <Logo type="squareLogo" />
      {documentToReactComponents(
        contentfulFeaturedCallToAction.callToAction.summary.json,
        options
      )}
      {/* TODO add space */}
      <Link
        to={`${contentfulFeaturedCallToAction.callToAction.buttonLink}`}
        className="btn-pink"
      >
        <p>{contentfulFeaturedCallToAction.callToAction.buttonTitle}</p>
      </Link>
    </GridSingle>
  );
};

export default FeaturedCTA;
