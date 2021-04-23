// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
   

module.exports = {
  chainWebpack (config) {
    config.mode('development')
  },
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
      use: '@gridsome/source-filesystem',
      options: {
        path: 'nuestro-blog/**/*.md',
        typeName: 'EsPost',
        refs: {
          etiqueta: {
            typeName: 'Etiqueta',
            create: true
          }
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'gallery/**/*.md',
        typeName: 'Gallery'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        exclude: ['/2/','/es/2/']
      }
    },
    {
      use: 'gridsome-plugin-feed',
      options: {
        // Required: array of `GraphQL` type names you wish to include
        contentTypes: ['Post', 'EsPost'],
        // Optional: any properties you wish to set for `Feed()` constructor
        // See https://www.npmjs.com/package/feed#example for available properties
        feedOptions: {
          title: 'Centro Carpintero Blog Feed',
          description: 'Home renovation and remodeling tips and information.'
        },
        // === All options after this point show their default values ===
        // Optional; opt into which feeds you wish to generate, and set their output path
        rss: {
          enabled: true,
          output: '/rss.xml'
        },
        atom: {
          enabled: false,
          output: '/feed.atom'
        },
        json: {
          enabled: false,
          output: '/feed.json'
        },
        // Optional: the maximum number of items to include in your feed
        maxItems: 25,
        // Optional: an array of properties passed to `Feed.addItem()` that will be parsed for
        // URLs in HTML (ensures that URLs are full `http` URLs rather than site-relative).
        // To disable this functionality, set to `null`.
        htmlFields: ['summary', 'content'],
        // Optional: if you wish to enforce trailing slashes for site URLs
        enforceTrailingSlashes: false,
        // Optional: a method that accepts a node and returns true (include) or false (exclude)
        // Example: only past-dated nodes: `filterNodes: (node) => node.date <= new Date()`
        filterNodes: (node) => true,
        // Optional: a method that accepts a node and returns an object for `Feed.addItem()`
        // See https://www.npmjs.com/package/feed#example for available properties
        // NOTE: `date` field MUST be a Javascript `Date` object
        nodeToFeedItem: (node) => ({
          title: node.title,
          date: node.date || node.fields.date,
          content: node.content
        })
      }
    }
  ],
  templates: {
    Tag: '/tag/:id',
    Post: '/blog/:path',
    EsPost: [
        {
          path: '/es/blog/:path',
          component: './src/templates/EsPost.vue'
        }
      ],
    Etiqueta: [
        {
          path: '/es/etiqueta/:id',
          component: './src/templates/EsTag.vue'
        }
      ]
  }
}
