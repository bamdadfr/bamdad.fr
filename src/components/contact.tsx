import React from 'react'
import styled from 'styled-components'
import { ContactData } from './contact.data'

const ContactDiv = styled.div`
    font-weight: 800;
`

const Column = styled.div`
    align-self: flex-end;

    /* border: 1px dashed blue; */
`

const Div = styled.div`
    margin-top: 4em;
    height: 4em;

    /* border: 1px solid black; */
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