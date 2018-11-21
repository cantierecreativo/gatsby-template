const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  //Multiple Instance of Content withouth language
  graphql(`
    {
      allDatoCmsWork {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    result.data.allDatoCmsWork.edges.map(({ node: page }) => {
      createPage({
        path: `works/${page.slug}`,
        component: path.resolve(`./src/templates/work.js`),
        context: {
          slug: page.slug,
        },
      })
    })
  })

  //X Languages

  const locales = ['it', 'en']

  //Single Instance of Content x Language
  locales.map(locale => {
    graphql(`
      {
        terms: datoCmsTermsPage(locale:{eq: "${locale}"}) { locale slug }
      }
    `).then(result => {
      console.log('RESULTS', result)
      if (result && result.data) {
        let slug = result.data.terms.slug
        createPage({
          path: slug,
          component: path.resolve(`./src/templates/terms.js`),
          context: {
            slug,
            locale,
          },
        })
      }
    })
  })

  //Multiple Instances of Contents x Language
  locales.map(locale => {
    graphql(`
      {
        pages: allDatoCmsPage(filter: {locale: { eq: "${locale}" } }) {
          edges {
            node {
              slug
              locale
            }
          }
        }
      }
    `).then(result => {
      result.data.pages.edges.forEach(item => {
        let p = `pages/${item.node.slug}`
        createPage({
          path: p,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            slug: item.node.slug,
            locale,
          },
        })
      })
    })
  })
}
