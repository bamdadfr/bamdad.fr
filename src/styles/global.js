import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
    body {
        font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif;
        font-weight: 900;
        text-transform: lowercase;
    }
    
    html {
        /* special pour iPhone X */

        @supports (padding: max(0px)) {
            .post {
                padding: max(12px, env(safe-area-inset-top)) max(12px, env(safe-area-inset-right)) max(12px, env(safe-area-inset-bottom)) max(12px, env(safe-area-inset-left));
            }
        }

        overflow-y: hidden;
        background: linear-gradient(to bottom right, #5EE7DF, #B490CA);
        background-size: 400% 400%;

        /* breakpoints */

        /* iPhone 4 */

        @media only screen and (max-height: 480px) {
            font-size: 0.5em;
        }

        /* iPhone 5/SE */

        @media only screen and (min-height: 481px) {
            font-size: 0.7em;
        }

        /* iPhone X */

        @media only screen and (min-width: 375px) and (min-height: 812px) {
            font-size: 1.1em;
        }

        /* iPad */

        @media only screen and (min-width: 768px) and (min-height: 1024px) {
            font-size: 1.1em;
        }

        /* iPad Pro */

        @media only screen and (min-width: 1024px) and (min-height: 1366px) {
            font-size: 1.2em;
        }

        /* Generic Laptop */

        @media only screen and (min-width: 1280px) {
            font-size: 1em;
        }

        /* Laptop with HiDPI */

        @media only screen and (min-width: 1440px) and (min-height: 900px) {
            font-size: 1em;
        }

        /* 4K */

        @media only screen and (min-height: 2000px) {
            font-size: 2em;
        }

        /* -webkit-animation: AnimationName 5s cubic-bezier(.42, 0, .58, 1) infinite; */

        /* -moz-animation: AnimationName 5s cubic-bezier(.42, 0, .58, 1) infinite; */

        /* animation */

        animation: AnimationName 5s cubic-bezier(.42, 0, .58, 1) infinite;

        @-webkit-keyframes AnimationName {
            0% {
                background-position: 0 17%
            }

            50% {
                background-position: 100% 84%
            }

            100% {
                background-position: 0 17%
            }
        }

        @-moz-keyframes AnimationName {
            0% {
                background-position: 0 17%
            }

            50% {
                background-position: 100% 84%
            }

            100% {
                background-position: 0 17%
            }
        }

        @keyframes AnimationName {
            0% {
                background-position: 0 17%
            }

            50% {
                background-position: 100% 84%
            }

            100% {
                background-position: 0 17%
            }
        }
    }
`