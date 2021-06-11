import React from 'react'
import { shallow } from 'enzyme'
import LayoutHeadComponent from './layout-head.component'

describe ('LayoutHeadComponent', () => {

    const component = <LayoutHeadComponent/>

    it ('should mount', () => {

        expect (shallow (component).exists ()).toBe (true)

    })

})