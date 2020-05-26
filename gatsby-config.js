module.exports = {
  siteMetadata: {
    title: "Gladino.net - The portfolio of Akash Pathak",
    author: "Akash Kumar Pathak",
    description: "The portfolio of Akash Pathak"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/gladino.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      // Blank options, equivalent to string-only plugin
      options: {
        trackingId: "UA-81911303-1",
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
