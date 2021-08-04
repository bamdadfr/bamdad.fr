import React from 'react'
import { Container } from './languages.component.styles'
import { LanguageComponent } from './components'
import { SlideAnimation } from '../../animations'

/**
 * @returns {React.ReactElement} react component
 */
export function LanguagesComponent () {

    return (
        <>
            <Container>
                <LanguageComponent delay={8600}/>
                <SlideAnimation delay={7600}>
                    I spend my time with
                </SlideAnimation>
            </Container>
        </>
    )

}
