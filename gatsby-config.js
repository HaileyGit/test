module.exports = {
  siteMetadata: {
    name: `Hailey`,
    description: `Hailey's Blog`,
    keywords: [`tech`, `blog`, `gatsby-theme`],
    siteUrl: `https://haileygit.github.io/`,
    siteImage: `https://gatsbythemeterminal.gatsbyjs.io/images/terminal-open-graph-image.jpg`,
    profileImage: `https://gatsbythemeterminal.gatsbyjs.io/images/terminal-profile-image.jpg`,
    lang: `ko`,
    config: {
      sidebarWidth: 280,
    },
  },
  plugins: [
    {
      resolve: `@pauliescanlon/gatsby-theme-terminal`,
      options: {
        source: [
          {
            name: 'posts',
            dir: 'posts',
          },
          {
            name: 'projects',
            dir: 'projects',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-76055934-8',
      },
    },
  ],
}
