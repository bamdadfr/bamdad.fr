import { createGlobalStyle } from 'styled-components'
import { Theme } from './theme'
import { Breakpoints } from './breakpoints'
import '@fontsource/lora'

/**
 * @name Global
 * @description global styles for `styled-components`
 */
export const Global = createGlobalStyle`
    body {
        font-family: 'Lora', sans-serif;
        font-size: 18px;
        font-weight: 400;
        color: ${Theme.colors.primary};

        @media screen and ${Breakpoints.mobile} {
            font-size: 1em;
        }

        @media screen and ${Breakpoints.tablet} {
            font-size: 1.1em;
        }

        @media screen and ${Breakpoints.desktop} {
            font-size: 1.2em;
        }

        @media screen and ${Breakpoints.widescreen} {
            font-size: 1.3em;
        }

        @media screen and ${Breakpoints.fullhd} {
            font-size: 1.4em;
        }
    }
`