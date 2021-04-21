import React from 'react'
import 'sass-reset'
import LayoutComponent from '@/components/layout/layout.component'
import { GlobalStyles } from '@/styles/global.styles'
import { ThemeStyles } from '@/styles/theme.styles'
import { ThemeProvider } from 'styled-components'

export default function MyApp ({ Component, pageProps }) {

    return (
        <>
            <GlobalStyles/>
            <ThemeProvider theme={ThemeStyles}>
                <LayoutComponent>
                    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                    <Component {...pageProps} />
                </LayoutComponent>
            </ThemeProvider>
        </>
    )

}