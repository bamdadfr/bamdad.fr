import React from 'react'
import PropTypes from 'prop-types'
import { StyledContainer } from './layout-main.styles'

/**
 * @function
 * @name LayoutMainComponent
 * @description layout sub component for rendering `main`
 * @param {JSX.Element} children - react components to render
 * @return {JSX.Element}
 */
export default function LayoutMainComponent ({ children }) {

    return (
        <>
            <StyledContainer>
                {children}
            </StyledContainer>
        </>
    )

}

LayoutMainComponent.propTypes = {
    'children': PropTypes.node.isRequired,
}