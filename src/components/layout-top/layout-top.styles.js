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
        //border: 1px solid black;
        overflow: hidden;
        font-size: 1.5em;

        @media screen and ${BreakpointsStyles.mobile} {
            width: calc(100vw - 2em);
            font-size: 1.4em;
        }

        @media screen and ${BreakpointsStyles.tablet} {
            width: 35vw;
        }

        @media screen and ${BreakpointsStyles.desktop} {
            width: 25vw;
        }

        @media screen and ${BreakpointsStyles.widescreen} {
            width: 20vw;
        }

        @media screen and ${BreakpointsStyles.fullhd} {
            width: 20vw;
        }
    }
`

