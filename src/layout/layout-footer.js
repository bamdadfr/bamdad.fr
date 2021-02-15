import React from 'react'
import styled from 'styled-components'
import { FooterData } from '../components/footer-data'

const Div = styled.div`
  margin-left: 0.6em;
`

export const LayoutFooter = () => (

    <Div role="complementary" className="hero-foot has-text-left">
        <div className="is-size-4-tablet is-size-5-mobile">

            {FooterData.map ((e, k) => e (k))}

        </div>
    </Div>

)