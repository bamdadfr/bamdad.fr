import { createGlobalStyle } from 'styled-components'
import { ThemeStyles } from './theme.styles'
import { BreakpointsStyles } from './breakpoints.styles'
import '@fontsource/lora'

/**
 * @name GlobalStyles
 * @description global styles for `styled-components`
 */
export const GlobalStyles = createGlobalStyle`
    body {
        font-family: 'Lora', sans-serif;
        font-size: 18px;
        font-weight: 400;
        color: ${ThemeStyles.colors.primary};

        @media screen and ${BreakpointsStyles.mobile} {
            font-size: 1em;
        }

        @media screen and ${BreakpointsStyles.tablet} {
            font-size: 1.1em;
        }

        @media screen and ${BreakpointsStyles.desktop} {
            font-size: 1.2em;
        }

        @media screen and ${BreakpointsStyles.widescreen} {
            font-size: 1.3em;
        }

        @media screen and ${BreakpointsStyles.fullhd} {
            font-size: 1.4em;
        }
    }
`