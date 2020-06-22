import React from 'react'
import styled from 'styled-components'
import data from './data'

const ContactDiv = styled.div`
    font-weight: 800;
`

const Column = styled.div`
    /* border: 1px dashed blue; */

    align-self: flex-end;
`

const Contact = styled.div`
    /* border: 1px solid black; */

    margin: 10px;
    height: 60px;
`

export default (): React.ReactElement => {

    return (
        <Contact className="columns is-centered is-mobile has-text-centered">
            <Column className="column is-full is-paddingless">

                <ContactDiv className="is-size-5-desktop is-size-6-tablet is-size-6-mobile">
            
                    {data.map ((e, k) => e (k))}

                </ContactDiv>

            </Column>
        </Contact>
    )

}