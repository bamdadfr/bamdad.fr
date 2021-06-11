import React from 'react'
import { shallow } from 'enzyme'
import LayoutTopComponent from './layout-top.component'

describe ('LayoutTopComponent', () => {

    const component = <LayoutTopComponent>{['first child', 'second child']}</LayoutTopComponent>

    it ('should mount', () => {

        expect (shallow (component).exists ()).toBe (true)

    })

    it ('should have a styled components id', () => {

        expect (shallow (component).props ().children.type.styledComponentId).toBeDefined ()

    })

})