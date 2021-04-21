import styled from 'styled-components'

export const StyledSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    font-size: 1.333em;

    @media (max-width: 768px) {
        font-size: 1em;
    }

    > div {
        > div {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        height: 2.667em;
    }
`

export const StyledButton = styled.button`
    color: ${props => props.color};
    border: 1px solid ${props => props.color};

    box-shadow: rgb(50 50 50 / 10%) 0 1px 2px 1px;
    transition: all 0.2s ease-in-out 0s;
    padding: calc(.5em - 1px) 1em;
    border-radius: 4px;

    &:hover {
        transform: translateY(-2px);
        color: ${props => props.hover};
        background: ${props => props.color};
    }

    //height: 3rem;
    //font-size: 1.5em;
    //
    //@media (max-width: 768px) {
    //    height: 2rem;
    //    font-size: 1em;
    //}
`