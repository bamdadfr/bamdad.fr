import React from 'react'
import { shallow } from 'enzyme'
import LayoutLanguagesComponent from './layout-languages.component'

describe ('LayoutLanguagesComponent', () => {

    const component = <LayoutLanguagesComponent/>

    it ('should mount', () => {

        expect (shallow (component).exists ()).toBe (true)

    })

    it ('should have a styled components id', () => {

        expect (shallow (component).props ().children.type.styledComponentId).toBeDefined ()

    })

})