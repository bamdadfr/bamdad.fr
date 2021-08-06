import React from 'react'
import { SlideAnimation } from '../../animations/slide/slide.animation'
import { GreetingsConstants } from './greetings.constants'
import { Container } from './greetings.component.styles'

/**
 * @returns {React.ReactElement} react component
 */
export function GreetingsComponent () {

    return (
        <>
            <Container>
                {GreetingsConstants.map ((element) => (
                    <SlideAnimation key={element.delay} delay={element.delay}>
                        {element.text}
                    </SlideAnimation>
                ))}
            </Container>
        </>
    )

}