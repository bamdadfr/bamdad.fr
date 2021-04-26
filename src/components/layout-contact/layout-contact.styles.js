import styled from 'styled-components'
import { BreakpointsStyles } from '@/config/breakpoints.styles'

export const StyledSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: calc(100vh - 60vh);

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
`

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 10em;
    max-height: 20vh;

    > div {
        height: 2.667em;
        margin: 0.25em 0;

        > div {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`

export const StyledButton = styled.a`
    color: ${props => props.color};
    border: 1px solid ${props => props.color};

    box-shadow: rgb(50 50 50 / 10%) 0 1px 2px 1px;
    transition: all 0.2s ease-in-out 0s;
    padding: calc(.5em + 1px) 1em;
    border-radius: 4px;

    &:hover {
        transform: translateY(-2px);
        color: ${props => props.hover};
        background: ${props => props.color};
    }
`