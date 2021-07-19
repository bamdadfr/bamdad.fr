import React from 'react'
import { render } from '@testing-library/react'
import { FadeAnimation } from './fade.animation'

const Children = () => <span>this is my children</span>

describe ('FadeAnimation', () => {

    describe ('container', () => {

        it ('should be in the document', () => {

            const { container } = render (<FadeAnimation><Children/></FadeAnimation>)

            expect (container).toBeInTheDocument ()

        })

        it ('should be visible', () => {

            const { container } = render (<FadeAnimation><Children/></FadeAnimation>)

            expect (container).toBeVisible ()

        })

    })

    describe ('props', () => {

        describe ('delay', () => {

            it ('should default to 0', () => {

                // need enzyme shallow rendering to test props

            })

            it ('should delay the render when prop is given', () => {

                // need enzyme shallow rendering to test props

            })

        })

    })

})