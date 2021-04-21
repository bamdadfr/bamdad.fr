import React from 'react'
import styled from 'styled-components'

export const StyledSection = styled.section`
    background: blue;
`

export default function LayoutTopComponent ({ children }) {

    return (
        <>
            <StyledSection>
                {children}
            </StyledSection>
        </>
    )

}