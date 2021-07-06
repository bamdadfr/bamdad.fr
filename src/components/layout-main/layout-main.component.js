import React from 'react'
import PropTypes from 'prop-types'
import { StyledContainer } from './layout-main.styles'

const propTypes = {
    'children': PropTypes.node.isRequired,
}

/**
 * @function
 * @name LayoutMainComponent
 * @description layout sub component for rendering `main`
 * @param {*} props - react component props
 * @param {React.ReactNode} props.children - react components to render
 * @returns {React.ReactNode} - react component
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

LayoutMainComponent.propTypes = propTypes