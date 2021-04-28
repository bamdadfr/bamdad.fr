import React from 'react'
import AnimationSlideComponent from '@/components/animation-slide/animation-slide.component'
import { GreetingsData } from '@/data/greetings.data'
import { StyledContainer } from './layout-greetings.styles'

/**
 * @function
 * @name LayoutGreetingsComponent
 * @description layout sub component for rendering `greetings`
 * @return {JSX.Element}
 */
export default function LayoutGreetingsComponent () {

    return (
        <>
            <StyledContainer>
                {
                    GreetingsData.map (
                        (element) => (
                            <AnimationSlideComponent key={element.delay} delay={element.delay}>
                                {element.text}
                            </AnimationSlideComponent>
                        ),
                    )
                }
            </StyledContainer>
        </>
    )

}