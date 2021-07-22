import { createGlobalStyle } from 'styled-components'
import { Theme } from './theme'
import { Breakpoints } from './breakpoints'
import '@fontsource/lora'

export const Global = createGlobalStyle`
    body {
        font-family: 'Lora', sans-serif;
        font-size: 18px;
        font-weight: 400;
        color: ${Theme.colors.primary};

        @media screen and ${Breakpoints.mobile} {
            font-size: 1.2em;
        }

        @media screen and ${Breakpoints.tablet} {
            font-size: 1.4em;
        }

        @media screen and ${Breakpoints.desktop} {
            font-size: 1.6em;
        }

        @media screen and ${Breakpoints.widescreen} {
            font-size: 1.8em;
        }

        @media screen and ${Breakpoints.fullhd} {
            font-size: 2em;
        }
    }
`