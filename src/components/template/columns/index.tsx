import React, { ReactElement } from 'react'
import styled from 'styled-components'
import One from './one'
import Two from './two'

const Body = styled.div`
    /* border: 1px solid black; */

    margin: 10px;
    height: 235px;

    @media only screen and (max-width: 768px) {
        height: 330px;
    }
`

export default (): ReactElement => {

    return (
        <Body role="main" className="columns is-centered is-mobile is-multiline">

            <One />

            <Two />
        
        </Body>
    )

}