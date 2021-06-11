import React from 'react'
import { shallow } from 'enzyme'
import LayoutBackgroundComponent from './layout-background.component'

describe ('LayoutBackgroundComponent', () => {

    const component = <LayoutBackgroundComponent/>

    it ('should mount', () => {

        expect (shallow (component).exists ()).toBe (true)

    })

    it ('should have a styled components id', () => {

        expect (shallow (component).props ().children.type.styledComponentId).toBeDefined ()

    })

})