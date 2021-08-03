import React from 'react'
import { render as defaultRender } from '@testing-library/react'
import NotFoundPage from '../pages/404'

const render = () => {

    const { container } = defaultRender (
        <NotFoundPage/>,
    )

    return {
        container,
    }

}

describe ('NotFoundPage', () => {

    describe ('container', () => {

        it ('should be in the document, visible and empty', () => {

            const { container } = render ()

            expect (container).toBeInTheDocument ()

            expect (container).toBeVisible ()

            expect (container).toBeEmptyDOMElement ()
        
        })
    
    })

})