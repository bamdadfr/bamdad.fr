import styled from 'styled-components'
import { BreakpointsStyles } from '@/styles/breakpoints.styles'

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

        margin-right: 2em;
        margin-left: 2em;

        @media screen and ${BreakpointsStyles.mobile} {
            margin: 0;
            width: calc(100% - 1.7em);
        }
    }
`

