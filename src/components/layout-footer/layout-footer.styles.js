import styled from 'styled-components'

export const StyledSection = styled.section`
    position: fixed;
    bottom: 0;
    left: 0;

    margin: 0 0 0.6em 0.667em;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.4em;

    > div {
        margin-right: 0.46em;

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

