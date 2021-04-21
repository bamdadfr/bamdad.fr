import React from 'react'
import { StyledContainer } from './layout-main.styles'

export default function LayoutMainComponent ({ children }) {

    return (
        <>
            <StyledContainer>
                {children}
            </StyledContainer>
        </>
    )

}