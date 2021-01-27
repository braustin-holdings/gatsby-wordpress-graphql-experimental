import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

// import WPBlocks from '../components/html-to-blocks'
// import ByLine from '../components/byline'
// import Layout from "../components/layout"

const PostTemplate = ({ data }) => {
  return (
    <>
      <h1>Post</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

export default PostTemplate

export const postQuery = graphql`
  query($id: String!) {
    wpPost(id: {eq: $id}) {
      id
      title
      slug
      date(formatString: "MMMM DD, YYYY")
      categories {
        nodes {
          slug
        }
      }
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      content
    }
  }
`

// ORIGINAL v3
// export const postQuery = graphql`
//   query($id: String!) {
//     wordpressPost(id: { eq: $id }) {
//       title
//       content
//       acf {
//         meta_description
//       }
//       author_meta {
//         display_name
//       }
//       post_thumbnail {
//         alt
//         src
//       }
//       categories {
//         slug
//       }
//       date(formatString: "MMMM DD, YYYY")
//     }
//     site {
//       siteMetadata {
//         title
//         description
//       }
//     }
//   }
// `