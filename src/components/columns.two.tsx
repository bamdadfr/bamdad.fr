import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { ColumnsData } from './columns.data'

const Column = styled.div`
    /* border: 1px dashed blue; */

    align-self: flex-end;
`

const SecondColumns = styled.div`
    /* border: 1px dashed blue; */

    white-space: nowrap;
    height: 110px;
`

export const ColumnsTwo = (): ReactElement => {

    return (
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

}