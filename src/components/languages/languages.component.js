import React from 'react'
import { LanguagesConstants } from './languages.constants'
import { useWaited, useAnimateArray } from '../../hooks'
import { FadeAnimation, SlideAnimation } from '../../animations'
import { Container, Icon, Label, LanguageContainer } from './languages.component.styles'

/**
 * @returns {React.ReactElement} react component
 */
export function LanguagesComponent () {

    const [waited] = useWaited (8600)

    const [{ index, isVisible }] = useAnimateArray (LanguagesConstants, {
        'start': waited,
    })

    return (
        <>
            <Container>
                {
                    waited
                        ?
                        (
                            <>
                                <FadeAnimation delay={350} isVisible={isVisible}>
                                    <Icon color={LanguagesConstants[index].color}>
                                        {LanguagesConstants[index].icon}
                                    </Icon>
                                </FadeAnimation>
                                <LanguageContainer>
                                    <SlideAnimation isVisible={isVisible}>
                                        <Label>
                                            {LanguagesConstants[index].text}
                                        </Label>
                                    </SlideAnimation>
                                </LanguageContainer>
                            </>
                        )
                        :
                        null
                }
                <SlideAnimation delay={7600}>
                    I spend my time with
                </SlideAnimation>
            </Container>
        </>
    )

}
