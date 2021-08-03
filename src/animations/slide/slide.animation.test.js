import React from 'react'
import { render as defaultRender } from '@testing-library/react'
import { SlideAnimation } from './slide.animation'

const render = () => {

    const { container } = defaultRender (
        <SlideAnimation>
            <span>children</span>
        </SlideAnimation>,
    )

    return {
        container,
    }

}

describe ('SlideAnimation', () => {

    describe ('container', () => {

        it ('should be in the document, visible and not empty', () => {

            const { container } = render ()

            expect (container).toBeInTheDocument ()

            expect (container).toBeVisible ()

            expect (container).not.toBeEmptyDOMElement ()
        
        })
    
    })

})