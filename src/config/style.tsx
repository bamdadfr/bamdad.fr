import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
body {
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif;
    font-weight: 900;
    text-transform: lowercase;
}

html {
    /* special pour iPhone X */

    @supports(padding: max(0px)) {
        .post {
            padding: max(12px, env(safe-area-inset-top)) max(12px, env(safe-area-inset-right)) max(12px, env(safe-area-inset-bottom)) max(12px, env(safe-area-inset-left));
        }
    }

    overflow-y: hidden;
    background: linear-gradient(to bottom right, #5EE7DF, #B490CA);
    background-size: 400% 400%;

    /* -webkit-animation: AnimationName 5s cubic-bezier(.42, 0, .58, 1) infinite; */

    /* -moz-animation: AnimationName 5s cubic-bezier(.42, 0, .58, 1) infinite; */

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