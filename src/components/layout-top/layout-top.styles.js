import styled from 'styled-components'
import { BreakpointsStyles } from '@/config/breakpoints.styles'

export const StyledSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    grid-gap: 1em;

    @media screen and ${BreakpointsStyles.mobile} {
        flex-direction: column;
        align-items: center;
    }

    > div {
        overflow: hidden;

        @media screen and ${BreakpointsStyles.mobile} {
            width: calc(100vw - 6vw);
            font-size: 1em;
        }

        @media screen and ${BreakpointsStyles.tablet} {
            width: calc(100vw - 70vw);
            font-size: 1.1em;
        }

        @media screen and ${BreakpointsStyles.desktop} {
            width: calc(100vw - 75vw);
            font-size: 1.2em;
        }

        @media screen and ${BreakpointsStyles.widescreen} {
            width: calc(100vw - 80vw);
            font-size: 1.3em;
        }

        @media screen and ${BreakpointsStyles.fullhd} {
            width: calc(100vw - 80vw);
            font-size: 1.4em;
        }
    }
`

