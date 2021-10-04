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
    {
      // docs: https://www.gatsbyjs.com/plugins/gatsby-plugin-scroll-reveal/
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: .8, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations
        
        // Advanced Options
        selector: '[data-sal]', // Selector of the elements to be animated
        animateClassName: 'sal-animate', // Class name which triggers animation
        disabledClassName: 'sal-disabled', // Class name which defines the disabled state
        rootMargin: '0% 50%', // Corresponds to root's bounding box margin
        enterEventName: 'sal:in', // Enter event name
        exitEventName: 'sal:out', // Exit event name
      }
    }
  ],
}
