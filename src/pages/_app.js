import React from 'react'
import { ThemeProvider } from 'styled-components'
import 'sass-reset'
import LayoutComponent from '@/components/layout/layout.component'
import { GlobalStyles } from '@/config/global.styles'
import { ThemeStyles } from '@/config/theme.styles'

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