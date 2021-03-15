import React from "react"
import { graphql } from "gatsby"

const PostTemplate = ({ data }) => {
  return (
    <>
      <h1>Product</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

export default PostTemplate

export const productQuery = graphql`
  query($id: String!) {
    wpProduct(id: { eq: $id }) {
      id
      name
      slug
      ... on WpSimpleProduct {
        price
        regularPrice
        length
        width
      }
      fmmhProduct {
        excludeAcCost
        walkThroughVideo
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
      productCategories {
        nodes {
          slug
          fmmhProductCategory {
            factoryAddress
            standardOptions {
              optionTitle
            }
          }
        }
      }
    }
  }
`

// ORIGINAL v3
// export const query = graphql`
//   query($id: Int!) {
//     wcProducts(wordpress_id: { eq: $id }) {
//       _fmmhCustomHomeOptions
//       wordpress_id
//       name
//       price
//       price_html
//       sku
//       slug
//       attributes {
//         id
//         name
//         options
//       }
//       acf {
//         exclude_ac_cost
//         virtual_tour_link
//         walk_through_video          
//         view_larger_floor_plan
//         product_qr
//       }

//       categories {
//         slug
//         acf {
//           standard_options {
//             option_title
//           }
//         }
//       }
//       dimensions {
//         length
//         width
//       }
//       images {
//         id
//         alt
//         src
//       }
//     }
//     allWcProductsCategories {
//       edges {
//         node {
//           slug
//           acf {
//             factory_address
//           }
//         }
//       }
//     }
//     wordpressAcfOptions {
//       options {
//         delivery_calculator_settings {
//           extra_width_surcharge_fee
//           extra_distance_fee
//           double_wide_mileage_rate
//           single_wide_mileage_rate
//           single_wide_cost
//           double_wide_cost
//           ac_costs {
//             double_wide_3_ton
//             double_wide_4_ton
//             single_wide_2_ton
//             single_wide_3_ton
//             double_wide_5_ton
//           }
//         }
//       }
//     }
//     wordpressWpImageEngine {
//       enabled
//     }
//   }
// `