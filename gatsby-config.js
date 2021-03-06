module.exports = {
  siteMetadata: {
    title: `CIVIC`,
    description: `Civic Software Foundation`,
    author: `CIVIC`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // Prefer contentful for images instead
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-emotion`,
    // {
    //   resolve: "gatsby-plugin-webpack-bundle-analyzer",
    //   options: {
    //     analyzerPort: 3000,
    //     production: true
    //   }
    // },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `3j4jpxgb52st`,
        accessToken: `xiK4OR-Zu0SkKqqZGvCnej4wkJB3vMB5Yn6ptGWcTts`
      }
    },
    `gatsby-plugin-extract-schema`,
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://hackoregon.us3.list-manage.com/subscribe/post?u=6bed8811c700af6cf48dfe893&amp;id=b11a78686d" // add your MC list endpoint here; see instructions below
      }
    },
    `gatsby-plugin-netlify`, // generates a _headers and _redirects file at the root of the public folder for Netlify
    `gatsby-plugin-layout`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
