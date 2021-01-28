import React from "react"
import { graphql } from "gatsby"


const PostTemplate = ({ data }) => {
  return (
    <>
      <h1>Archive</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

export default PostTemplate

export const postQuery = graphql`
  query($id: String!) {
    wpProductCategory(id: { eq: $id }) {
      id
      slug
      name
      products {
        nodes {
          id
          name
          slug
          ... on WpSimpleProduct {
            price
            regularPrice
          }
          fmmhProduct {
            virtualTourLink
            viewLargerFloorPlan {
              mediaItemUrl
            }
          }
          image {
            mediaItemUrl
          }
          attributes {
            nodes {
              name
              options
            }
          }
        }
      }
    }
  }
`

// ORIGINAL v3
// query($id: Int!) {
//   wcProductsCategories(wordpress_id: {eq: $id}) {
//     wordpress_id
//     name
//     slug
//     products {
//       wordpress_id
//       name
//       slug
//       price_html
//       price
//       acf {
//         view_larger_floor_plan
//         virtual_tour_link
//       }
//       attributes {
//         name
//         options
//       }
//       images {
//         src
//         alt
//       }
//     }
//   }
// }