import styled from 'styled-components'
import { BreakpointsStyles } from '@/config/breakpoints.styles'

export const StyledSection = styled.section`
    position: fixed;
    bottom: 0;
    left: 0;

    //margin: 0 0 0.333em 0.333em;
    margin: 0 0 0.667em 0.667em;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media screen and ${BreakpointsStyles.mobile} {
        font-size: 1.6em;
    }

    @media screen and ${BreakpointsStyles.tablet} {
        font-size: 1.7em;
    }

    @media screen and ${BreakpointsStyles.desktop} {
        font-size: 1.8em;
    }

    @media screen and ${BreakpointsStyles.widescreen} {
        font-size: 1.9em;
    }

    @media screen and ${BreakpointsStyles.fullhd} {
        font-size: 2em;
    }

    > div {
        //margin-right: 0.333em;
        margin-right: 0.5em;

        &:last-child {
            margin-right: 0;
        }
    }
`

export const StyledA = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;

    transition: color 0.2s cubic-bezier(0.42, 0, 0.58, 1) 0s;

    &:hover {
        color: ${props => props.color};
        cursor: pointer;
    }
`

