import React from 'react'
import styled from 'styled-components'
import { FooterData } from './footer.data'

const TextDiv = styled.div`
    /* border: 1px dashed red; */
`

const Div = styled.div`
    margin-left: 0.6em;
`

export const Footer = (): React.ReactElement => (

    <Div role="complementary" className="hero-foot has-text-left">
        <TextDiv className="is-size-4-tablet is-size-5-mobile">

            {FooterData.map ((e, k) => e (k))}

        </TextDiv>
    </Div>

)