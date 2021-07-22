import styled from 'styled-components'
import { Breakpoints } from '../../app/styles'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    @media screen and ${Breakpoints.mobile} {
        height: 8em;
        padding-top: 1em;
    }
`

export const Bold = styled.span`
    font-weight: 800;
`