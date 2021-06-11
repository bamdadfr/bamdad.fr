import React from 'react'
import { shallow } from 'enzyme'
import LayoutContactComponent from './layout-contact.component'

describe ('LayoutContactComponent', () => {

    const component = <LayoutContactComponent/>

    it ('should mount', () => {

        expect (shallow (component).exists ()).toBe (true)

    })

    it ('should have a styled components id', () => {

        expect (shallow (component).props ().children.type.styledComponentId).toBeDefined ()

    })

})