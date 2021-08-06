import React from 'react'
import { render as defaultRender } from '@testing-library/react'
import { DefaultLayout } from './default.layout'
import { WithStyledComponents } from '../../app/components/with-styled-components/with-styled-components'

const render = () => {

    const { container } = defaultRender (
        <WithStyledComponents>
            <DefaultLayout>
                <span>children</span>
            </DefaultLayout>
        </WithStyledComponents>,
    )

    return {
        container,
    }

}

describe ('DefaultLayout', () => {

    describe ('container', () => {

        it ('should be defined and visible', () => {

            const { container } = render ()

            expect (container).toBeInTheDocument ()

            expect (container).toBeVisible ()

        })

        it ('should not be empty', () => {

            const { container } = render ()

            expect (container).not.toBeEmptyDOMElement ()

        })

    })

})