module.exports = {
  siteMetadata: {
    title: `Interit`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@interit-me`,
    categories: [
      {
        id: "javascript",
        label: "JavaScript",
      },
      {
        id: "python",
        label: "Python",
      },
      {
        id: "cpp",
        label: "C++",
      },
    ],
    levels: [
      {
        id: "junior",
        label: "Junior",
      },
      {
        id: "regular",
        label: "Regular",
      },
      {
        id: "senior",
        label: "Senior",
      },
    ],
  },
  plugins: [
    {
      resolve: "gatsby-source-firestore",
      options: {
        credential: require("./firebase.json"),
        types: [
          {
            type: "Questions",
            collection: "questions",
            map: doc => ({
              text: doc.text,
              level: doc.level,
              category: doc.category,
              created_at: doc.created_at,
              published: doc.published,
            }),
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
