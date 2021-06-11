import React from 'react'
import { shallow } from 'enzyme'
import AnimationSlideComponent from './animation-slide.component'

describe ('AnimationSlideComponent', () => {

    const component = <AnimationSlideComponent><span>child</span></AnimationSlideComponent>

    it ('should mount', () => {

        expect (shallow (component).exists ()).toBe (true)

    })

    it ('should have props', () => {

        expect (shallow (component).props ().children.props.style).toBeDefined ()

    })

})