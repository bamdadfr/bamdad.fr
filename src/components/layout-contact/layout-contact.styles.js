import styled from 'styled-components'

export const StyledSection = styled.section`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;

    //margin-bottom: 3.5em;
    height: 13em;

    font-size: 1.4em;

    > div {

        > div {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        height: 2.667em;
        margin: 0.25em 0;
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