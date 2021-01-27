import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

// import WPBlocks from '../components/html-to-blocks'
// import ByLine from '../components/byline'
// import Layout from "../components/layout"

const PageTemplate = ({ data }) => {
  return (
    <>
      <h1>Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wpPage(id: {eq: $id}) {
      id
      title
      slug
      date(formatString: "MMMM DD, YYYY")
      metaFields {
        metaDescription
      }
      content
    }
  }
`

// ORIGINAL v3
// export const pageQuery = graphql`
//   query($id: String!) {
//     wordpressPage(id: { eq: $id }) {
//       title
//       content
//       date(formatString: "MMMM DD, YYYY")
//       acf {
//         meta_description
//       }
//     }
//   }
// `