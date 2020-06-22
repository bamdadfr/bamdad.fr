import React from 'react'
import styled from 'styled-components'
import data from './data'

const TextDiv = styled.div`
    /* border: 1px dashed red; */
`

const Footer = styled.div`
    margin-left: 0.6em;
`

export default (): React.ReactElement => {

    return (
        <Footer role="complementary" className="hero-foot has-text-left">
            <TextDiv className="is-size-4-tablet is-size-5-mobile">

                {data.map ((e, k) => e (k))}

            </TextDiv>
        </Footer>

    )

}