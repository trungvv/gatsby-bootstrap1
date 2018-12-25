import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Post from 'templates/Post'
import Meta from 'components/Meta'
import Layout from 'components/Layout'
import Banner from 'components/Banner'
import SectionProduct from 'components/SectionProduct'
import SectionService from 'components/SectionService'
import SectionCustomer from 'components/SectionCustomer'
import SectionPricing from 'components/SectionPricing'
import SectionContact from 'components/SectionContact'

const BlogIndex = ({ data, location }) => {
  // const posts = get(data, 'remark.posts')
  return (
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} />

      <Banner />
      <SectionProduct />
      <SectionService />
      <SectionCustomer />
      <SectionPricing />
      <SectionContact />

      {/* {posts.map(({ post }, i) => (
        <Post
          data={post}
          options={{
            isIndex: true,
          }}
          key={i}
        />
      ))} */}
    </Layout>
  )
}

export default BlogIndex

// export const pageQuery = graphql`
//   query IndexQuery {
//     site {
//       meta: siteMetadata {
//         title
//         description
//         url: siteUrl
//         author
//         twitter
//         adsense
//       }
//     }
//     remark: allMarkdownRemark(
//       sort: { fields: [frontmatter___date], order: DESC }
//     ) {
//       posts: edges {
//         post: node {
//           html
//           frontmatter {
//             layout
//             title
//             path
//             category
//             tags
//             description
//             date(formatString: "YYYY/MM/DD")
//             image {
//               childImageSharp {
//                 fixed(width: 500) {
//                   ...GatsbyImageSharpFixed_withWebp
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `
