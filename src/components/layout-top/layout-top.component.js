import React from 'react'
import PropTypes from 'prop-types'
import { StyledSection } from './layout-top.styles'

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

LayoutTopComponent.propTypes = {
    'children': PropTypes.arrayOf (PropTypes.node.isRequired).isRequired,
}