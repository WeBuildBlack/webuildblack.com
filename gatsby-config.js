module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter - Forty V2',
    author: 'Hunter Chang',
    description: 'A Gatsby.js V2 Starter based on Forty by HTML5 UP',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#f4cf64',
        theme_color: '#f4cf64',
        display: 'minimal-ui',
        icon: 'src/assets/images/wbb-logo-square-no-bg.svg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `page-frontmatter`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
