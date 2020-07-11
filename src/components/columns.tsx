import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { ColumnsOne } from './columns.one'
import { ColumnsTwo } from './columns.two'

const Body = styled.div`
    /* border: 1px solid black; */

    margin: 10px;
    height: 235px;

    @media only screen and (max-width: 768px) {
        height: 330px;
    }
`

export const Columns = (): ReactElement => {

    return (
        <Body role="main" className="columns is-centered is-mobile is-multiline">

            <ColumnsOne />

            <ColumnsTwo />
        
        </Body>
    )

}