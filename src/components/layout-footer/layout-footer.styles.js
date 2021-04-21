import styled from 'styled-components'

export const StyledSection = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const StyledA = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;

    transition: color 0.2s cubic-bezier(0.42, 0, 0.58, 1) 0s;
    font-size: 1.5em;
    margin-left: 0.5em;

    &:hover {
        color: ${props => props.color};
        cursor: pointer;
    }
`

