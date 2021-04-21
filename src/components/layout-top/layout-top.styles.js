import styled from 'styled-components'

export const StyledSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    grid-gap: 1em;

    @media (max-width: 767px) {
        flex-direction: column;
        align-items: center;
    }

    > div {
        border: 1px solid black;
        overflow: hidden;

        width: 30vw;

        @media (max-width: 767px) {
            width: calc(100vw - 2em);
        }

        font-size: 1.5em;

        @media (max-width: 767px) {
            font-size: 1.2em;
        }
    }
`

