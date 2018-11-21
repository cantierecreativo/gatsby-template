import React from 'react'
import { Helmet } from 'react-helmet'
import { HelmetDatoCms } from 'gatsby-source-datocms'

import { IntlProvider, addLocaleData, FormattedMessage } from 'react-intl'
import en from 'react-intl/locale-data/en'
import it from 'react-intl/locale-data/it'
import itMessages from '../locales/it.js'
import enMessages from '../locales/en.js'

import Header from './header'
import Footer from './footer'

import '../styles/index.sass'

addLocaleData([...it, ...en])
const messages = {
  it: itMessages,
  en: enMessages,
}

export default class TemplateWrapper extends React.Component {
  componentDidMount() {
    // const navGlobal = typeof window !== 'undefined' && window.navigator
    // this.setState({ nav: navGlobal })
  }

  getLocale() {
    const nav = typeof window !== 'undefined' && window.navigator
    if (!nav) return 'en'

    let lang =
      (nav.languages && nav.languages[0]) ||
      nav.language ||
      nav.userLanguage ||
      'en'
    lang = lang.substring(0, 2)
    return lang
  }

  render() {
    const locale = this.getLocale()
    const { children, data } = this.props
    return (
      <>
        <Helmet>
          <html lang={locale} />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
          />
          <meta name="theme-color" content="#ffffff" />
        </Helmet>
        {data.datoCmsSite && (
          <HelmetDatoCms
            favicon={data.datoCmsSite.faviconMetaTags}
            seo={data.datoCmsHome.seoMetaTags}
          />
        )}
        <IntlProvider locale={locale} messages={messages[locale]}>
          <div className="section">
            <Header locale={locale} />
            <div className="wrap">
              <FormattedMessage id="hello" />
              {children}
            </div>
            <Footer />
          </div>
        </IntlProvider>
      </>
    )
  }
}
