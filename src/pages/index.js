import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => (
  <Layout data={data}>
    <div>
      <h6> {data.datoCmsSite.globalSeo.siteName}</h6>
      <div>{data.datoCmsHome.copyright}</div>
      <div
        dangerouslySetInnerHTML={{__html: data.datoCmsHome.introTextNode.childMarkdownRemark.html}}
      />
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    datoCmsSite {
      globalSeo {
        siteName
      }
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    datoCmsHome {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      introTextNode {
        childMarkdownRemark {
          html
        }
      }
      copyright
    }
  }
`
