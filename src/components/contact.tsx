import React from 'react'
import styled from 'styled-components'
import { ContactData } from './contact.data'

const ContactDiv = styled.div`
    font-weight: 800;
`

const Column = styled.div`
    /* border: 1px dashed blue; */

    align-self: flex-end;
    margin-bottom: -20px;
`

const Div = styled.div`
    /* border: 1px solid black; */

    margin: 10px;
    height: 60px;
`

export const Contact = (): React.ReactElement => {

    return (
        <Div className="columns is-centered is-mobile has-text-centered">
            <Column className="column is-full is-paddingless">

                <ContactDiv className="is-size-5-desktop is-size-6-tablet is-size-6-mobile">
            
                    {ContactData.map ((e, k) => e (k))}

                </ContactDiv>

            </Column>
        </Div>
    )

}