const path = require('path')
const slash = require('slash')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  console.log('testing...')
  try {
    const result = await graphql(`
      {
        allWpPage {
          nodes {
            id
            slug
          }
        }
        allWpPost(sort: { fields: [date] }) {
          nodes {
            id
            slug
          }
        }
        allWpProduct {
          nodes {
            id
            slug
          }
        }
        allWpProductCategory {
          nodes {
              id
              slug
          }
        }
      }
    `)
    
    const {
      allWpPage,
      allWpPost,
      allWpProduct,
      allWpProductCategory,      
    } = result.data

    // posts
    const postTemplate = path.resolve(`./src/templates/post.js`)
    allWpPost.nodes.forEach(({
      id,
      slug,
    }) => {
      createPage({
        path: `/${slug}`,
        component: slash(postTemplate),
        context: { id },
      })
    })

    // pages
    const pageTemplate = path.resolve(`./src/templates/page.js`)
    allWpPage.nodes.forEach(({
      id,
      slug,
    }) => {
      createPage({
        path: `/${slug}`,
        component: slash(pageTemplate),
        context: { id },
      })
    })

    // Single Product - Homes
    const productTemplate = path.resolve(`./src/templates/product.js`)
    allWpProduct.nodes.forEach(({
      id,
      slug,
    }) => {
      createPage({
        path: `/product/${slug}`,
        component: slash(productTemplate),
        context: { id },
      })
    })

    // archive
    const archiveTemplate = path.resolve(`./src/templates/archive.js`)
    allWpProductCategory.nodes.forEach(({
      id,
      slug,
    }) => {
      createPage({
        path: `/homes/${slug}`,
        component: slash(archiveTemplate),
        context: { id },
      })
    })
    
  } catch(err) {
    throw err
  }
}





