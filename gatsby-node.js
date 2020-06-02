/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allContentfulPost {
        edges {
          node {
            slug
            title
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
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  // Create blog post pages.
  const posts = result.data.allContentfulPost.edges;
  // you'll call `createPage` for each result
  posts.forEach(({ node }) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: `/posts/${node.slug}`,
      // This component will wrap our MDX content
      component: path.resolve(`./src/components/PostTemplate.js`),
      // You can use the values in this context in
      // our page layout component
      context: {
        post: node
      }
    });
  });
};

// You can delete this file if you're not using it
