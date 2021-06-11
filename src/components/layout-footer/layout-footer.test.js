import React from 'react'
import { shallow } from 'enzyme'
import LayoutFooterComponent from './layout-footer.component'

describe ('LayoutFooterComponent', () => {

    const component = <LayoutFooterComponent/>

    it ('should mount', () => {

        expect (shallow (component).exists ()).toBe (true)

    })

    it ('should have a styled components id', () => {

        expect (shallow (component).props ().children.type.styledComponentId).toBeDefined ()

    })

})