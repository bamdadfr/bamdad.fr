import React from 'react'
import styled from 'styled-components'
import { ContactData } from '../components/contact-data'

const StyledContact = styled.div`
    font-weight: 800;
`

const StyledWrapper = styled.div`
    align-self: flex-end;
`

const StyledContainer = styled.div`
    margin-top: 4em;
    height: 4em;
`

export const LayoutContact = () => (
    <StyledContainer className="columns is-centered is-mobile has-text-centered">
        <StyledWrapper className="column is-full is-paddingless">

            <StyledContact className="is-size-5-desktop is-size-6-tablet is-size-6-mobile">

                {ContactData.map ((e, k) => e (k))}

            </StyledContact>

        </StyledWrapper>
    </StyledContainer>
)