import React from 'react'
import { shallow } from 'enzyme'
import LayoutGreetingsComponent from './layout-greetings.component'

describe ('LayoutGreetingsComponent', () => {

    const component = <LayoutGreetingsComponent/>

    it ('should mount', () => {

        expect (shallow (component).exists ()).toBe (true)

    })

    it ('should have a styled components id', () => {

        expect (shallow (component).props ().children.type.styledComponentId).toBeDefined ()

    })

})