/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql, Link } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Logo } from "@hackoregon/ui-brand";
import options from "../../../_Common/contentfulOptions";
import GridSingle from "../../../components/GridSingle";

const FeaturedPost = () => {
  const { contentfulFeaturedPost } = useStaticQuery(
    graphql`
      query {
        contentfulFeaturedPost(location: { eq: "Home" }) {
          id
          post {
            preview {
              json
            }
            slug
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
        contentfulFeaturedPost.post.preview.json,
        options
      )}
      {/* TODO add space */}
      <Link
        to={`posts/${contentfulFeaturedPost.post.slug}`}
        className="btn-pink"
      >
        <p>See Details</p>
      </Link>
    </GridSingle>
  );
};

export default FeaturedPost;
