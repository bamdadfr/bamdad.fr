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

        margin-right: 1em;
        margin-left: 1em;

        min-width: 11em;

        @media screen and ${BreakpointsStyles.mobile} {
            margin: 0;
            width: calc(100% - 1.7em);
        }
    }
`

