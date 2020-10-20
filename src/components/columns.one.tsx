import React from 'react'
import type { ReactElement } from 'react'
import styled from 'styled-components'
import { ColumnsData } from './columns.data'

const Column = styled.div`
    align-self: flex-end;

    /* border: 1px dashed blue; */
`

const FirstColumns = styled.div`
    height: 10em;

    /* border: 1px dashed blue; */
`

export const ColumnsOne = (): ReactElement => {

    return (
        <Column
            className="column is-one-fifth-fullhd is-4-desktop is-4-tablet is-full-mobile is-paddingless"
        >
            <FirstColumns className="columns is-marginless is-mobile">
                <Column className="column is-full is-paddingless">

                    <div className="is-size-4-desktop is-size-5-tablet is-size-5-mobile">

                        {ColumnsData[0].map ((e, k) => e (k))}

                    </div>

                </Column>
            </FirstColumns>
        </Column>
    )

}

