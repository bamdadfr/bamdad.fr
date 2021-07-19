import React from 'react'
import { ThemeProvider } from 'styled-components'
import 'sass-reset'
import { Theme, Global } from '../app/styles'
import { useApp } from '../app/hooks'

/**
 * @function
 * @name MyApp
 * @description next.js _app
 * @param {*} props - react component props
 * @param {React.ReactNode} props.Component - child
 * @param {object} props.pageProps - child props
 * @param {Error} props.err - error
 * @returns {React.ReactNode} - react component
 */
export default function MyApp ({ Component, pageProps, err }) {

    useApp ()

    return (
        <>
            <Global/>
            <ThemeProvider theme={Theme}>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <Component {...pageProps} err={err}/>
            </ThemeProvider>
        </>
    )

}