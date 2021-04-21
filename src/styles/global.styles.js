import { createGlobalStyle } from 'styled-components'
import { ThemeStyles } from './theme.styles'

export const GlobalStyles = createGlobalStyle`
    body {
        font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif;
        font-weight: 900;
        text-transform: lowercase;
        color: ${ThemeStyles.colors.primary};
    }
`