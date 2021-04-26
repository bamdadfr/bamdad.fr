import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from '@/lib/gtag'
import { Helmet } from 'react-helmet'

export default class MyDocument extends Document {

    static async getInitialProps (...args) {

        const documentProps = await super.getInitialProps (...args)

        return {
            ...documentProps,
            'helmet': Helmet.renderStatic (),
        }

    }

    // should render on <html>
    get helmetHtmlAttrComponents () {

        return this.props.helmet.htmlAttributes.toComponent ()

    }

    // should render on <body>
    get helmetBodyAttrComponents () {

        return this.props.helmet.bodyAttributes.toComponent ()

    }

    // should render on <head>
    get helmetHeadComponents () {

        return Object.keys (this.props.helmet)
            .filter ((el) => el !== 'htmlAttributes' && el !== 'bodyAttributes')
            .map ((el) => this.props.helmet[el].toComponent ())

    }

    render () {

        return (
            <Html {...this.helmetHtmlAttrComponents}>
                <Head>
                    {this.helmetHeadComponents}
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}/>
                    <script
                        dangerouslySetInnerHTML={{ '__html': `function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","${GA_TRACKING_ID}",{page_path:window.location.pathname});` }}
                    />
                </Head>
                <body {...this.helmetBodyAttrComponents}>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )

    }

}