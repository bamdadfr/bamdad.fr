import React from 'react'
import type { ReactElement } from 'react'
import styled from 'styled-components'
import { ColumnsOne } from './columns.one'
import { ColumnsTwo } from './columns.two'

const Body = styled.div`
    margin: 1em;
    height: 15em;

    /* border: 1px solid black; */
`

export const Columns = (): ReactElement => (
    <Body role="main" className="columns is-centered is-mobile is-multiline">

        <ColumnsOne />

        <ColumnsTwo />
        
    </Body>
)