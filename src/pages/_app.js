/* eslint-disable jsdoc/require-jsdoc */
import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { useRouter } from 'next/router'
import 'sass-reset'
import LayoutComponent from '@/components/layout/layout.component'
import { ThemeStyles } from '@/styles/theme.styles'
import { GlobalStyles } from '@/styles/global.styles'
import { Helmet } from 'react-helmet'
import { MetaData } from '@/data/meta.data'
import * as gtag from '@/lib/gtag'

export default function MyApp ({ Component, pageProps, err }) {

    const router = useRouter ()

    useEffect (() => {

        const handleRouteChange = (url) => {

            gtag.pageview (url)

        }

        router.events.on ('routeChangeComplete', handleRouteChange)

        return () => {

            router.events.off ('routeChangeComplete', handleRouteChange)

        }

    }, [router.events])

    return (
        <>
            <Helmet
                htmlAttributes={{ 'lang': 'en' }}
                title="Bamdad Sabbagh"
                meta={[
                    ...MetaData,
                ]}
            />
            <GlobalStyles/>
            <ThemeProvider theme={ThemeStyles}>
                <LayoutComponent>
                    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                    <Component {...pageProps} err={err}/>
                </LayoutComponent>
            </ThemeProvider>
        </>
    )

}