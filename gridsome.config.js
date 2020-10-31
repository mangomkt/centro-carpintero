// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
   

module.exports = {
  chainWebpack (config) {
    config.mode('development')
  },
  siteName: 'Centro Carpintero PV',
  siteDescription: 'Your source for home renovations in Puerto Vallarta, Mexico',
  siteUrl: 'https://centrocarpinterpv.com',
  plugins: [
    {
      use: "gridsome-plugin-manifest",
      options: {
        background_color: "#023D34",
        icon_path: "./src/assets/img/centrocarpintero-icon.png",
        name: "Centro Carpintero",
        short_name: "Centro Carpintero",
        theme_color: "#FFFFFF",
        lang: "en",
      },
    },
    {
      use: 'gridsome-plugin-tailwindcss',
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Documentation', // Required
        baseDir: './docs', // Where .md files are located
        pathPrefix: '/docs', // Add route prefix. Optional
        template: './src/templates/Documentation.vue', // Optional
        plugins: [
          [ 'gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Palenight', skipInline: true } ]
      ],
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      }
    },
  ],
  templates: {
    Tag: '/tag/:id'
  }
}
