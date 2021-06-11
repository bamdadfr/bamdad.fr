import React from 'react'
import { shallow } from 'enzyme'
import LayoutMainComponent from './layout-main.component'

describe ('LayoutMainComponent', () => {

    const component = <LayoutMainComponent><span>child</span></LayoutMainComponent>

    it ('should mount', () => {

        expect (shallow (component).exists ()).toBe (true)

    })

    it ('should have a styled components id', () => {

        expect (shallow (component).props ().children.type.styledComponentId).toBeDefined ()

    })

})