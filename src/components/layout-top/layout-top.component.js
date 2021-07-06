import React from 'react'
import PropTypes from 'prop-types'
import { StyledSection } from './layout-top.styles'

const propTypes = {
    'children': PropTypes.arrayOf (PropTypes.node.isRequired).isRequired,
}

/**
 * @function
 * @name LayoutTopComponent
 * @description layout sub component for rendering `top`
 * @param {*} props - react component props
 * @param {React.ReactNode} props.children - component to render
 * @returns {React.ReactNode} - react component
 */
export default function LayoutTopComponent ({ children }) {

    return (
        <>
            <StyledSection>
                <div>
                    {children[0]}
                </div>
                <div>
                    {children[1]}
                </div>
            </StyledSection>
        </>
    )

}

LayoutTopComponent.propTypes = propTypes