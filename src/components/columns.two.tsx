import React from 'react'
import type { ReactElement } from 'react'
import styled from 'styled-components'
import { ColumnsData } from './columns.data'

const Column = styled.div`
    align-self: flex-end;

    /* border: 1px dashed blue; */
`

const SecondColumns = styled.div`
    white-space: nowrap;
    height: 8em;

    /* border: 1px dashed blue; */
`

export const ColumnsTwo = (): ReactElement => (
    <Column
        className="column is-one-fifth-fullhd is-4-desktop is-4-tablet is-full-mobile is-paddingless"
    >
        <SecondColumns className="columns is-marginless is-mobile">
            <Column className="column is-full is-paddingless">

                {ColumnsData[1].map ((e, k) => e (k))}

            </Column>
        </SecondColumns>
    </Column>
)