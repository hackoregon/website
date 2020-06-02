import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Post from "../../components/Post";

const FeaturedPost = () => {
  const { contentfulPost } = useStaticQuery(
    graphql`
      query {
        contentfulPost(contentful_id: { eq: "6o7J1Bj6ar3N5pspplUGOr" }) {
          title
          slug
          content {
            json
          }
          authors {
            name
            email
          }
          createdAt(formatString: "MMMM DD, YYYY")
          updatedAt(formatString: "MMMM DD, YYYY")
          buttonText
          buttonLocalLink
          buttonExternalLink
        }
      }
    `
  );

  return (
    <Post
      title={contentfulPost.title}
      content={contentfulPost.content}
      authors={contentfulPost.authors}
      slug={contentfulPost.slug}
      created={contentfulPost.createdAt}
      updated={contentfulPost.updatedAt}
      featured
      buttonText={contentfulPost.buttonText}
      buttonLocalLink={contentfulPost.buttonLocalLink}
      buttonExternalLink={contentfulPost.buttonExternalLink}
    />
  );
};

export default FeaturedPost;
