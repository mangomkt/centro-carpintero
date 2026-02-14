// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api, options) {
  api.loadSource(store => {
    // Remove future-dated posts from the data layer
    const posts = store.getCollection('Post')
    const esPosts = store.getCollection('EsPost')
    const now = new Date()

    // Filter English posts
    posts.data().forEach(post => {
      const postDate = new Date(post.date)
      if (postDate > now) {
        posts.removeNode(post.id)
      }
    })

    // Filter Spanish posts
    esPosts.data().forEach(post => {
      const postDate = new Date(post.date)
      if (postDate > now) {
        esPosts.removeNode(post.id)
      }
    })
  })
}
