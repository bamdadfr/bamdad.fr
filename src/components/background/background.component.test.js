import React from 'react'
import { render as defaultRender } from '@testing-library/react'
import { BackgroundComponent } from './background.component'
import { WithStyledComponents } from '../../app/components'

const render = () => {

    const { container } = defaultRender (
        <WithStyledComponents>
            <BackgroundComponent/>
        </WithStyledComponents>,
    )

    return {
        container,
    }

}

describe ('BackgroundComponent', () => {

    describe ('container', () => {

        it ('should be in the document, visible and not empty', () => {

            const { container } = render ()

            expect (container).toBeInTheDocument ()

            expect (container).toBeVisible ()

            expect (container).not.toBeEmptyDOMElement ()

        })
    
    })

})