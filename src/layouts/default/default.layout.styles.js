import styled from 'styled-components'
import { Breakpoints } from '../../app/styles'

export const Container = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;

    display: grid;
    grid-template-rows: 1fr 1fr;
`

export const TopSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    grid-gap: 1em;

    @media screen and ${Breakpoints.mobile} {
        flex-direction: column;
        align-items: center;
    }

    > div {
        overflow: hidden;

        margin-right: 1em;
        margin-left: 1em;

        min-width: 11em;

        @media screen and ${Breakpoints.mobile} {
            margin: 0;
            width: calc(100% - 1.7em);
        }
    }
`