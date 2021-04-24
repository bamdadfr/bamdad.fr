import React, { useEffect, useState } from 'react'
import AnimationSlideComponent from '@/components/animation-slide/animation-slide.component'
import { LanguagesData } from '@/data/languages.data'
import AnimationFadeComponent from '@/components/animation-fade/animation-fade.component'
import { StyledIcon, StyledText, StyledTextContainer } from './layout-languages.styles'

export default function LayoutLanguagesComponent () {

    const [index, setIndex] = useState (0)
    const [isVisible, setIsVisible] = useState (true)

    useEffect (() => {

        function nextIndex () {

            if (typeof LanguagesData[index + 1] === 'undefined') {

                return setIndex (0)

            }

            return setIndex (index + 1)

        }

        new Promise (
            (resolve) => {

                setTimeout (() => {

                    setIsVisible (false)

                    resolve ()

                }, 2400)

            },
        )
            .then (
                () => new Promise (
                    (resolve) => {

                        setTimeout (() => {

                            nextIndex ()

                            resolve ()

                        }, 1200)

                    },
                ),
            )
            .then (
                () => new Promise (
                    (resolve) => {

                        setTimeout (() => {

                            setIsVisible (true)

                            resolve ()

                        }, 0)

                    },
                ),
            )

    }, [index, LanguagesData.length])

    return (
        <>
            <AnimationFadeComponent delay={8600}>
                <AnimationFadeComponent delay={350} isVisible={isVisible}>
                    <StyledIcon color={LanguagesData[index].color}>
                        {LanguagesData[index].icon}
                    </StyledIcon>
                </AnimationFadeComponent>
                <StyledTextContainer>
                    <AnimationSlideComponent isVisible={isVisible}>
                        <StyledText>
                            {LanguagesData[index].text}
                        </StyledText>
                    </AnimationSlideComponent>
                </StyledTextContainer>
            </AnimationFadeComponent>
            <AnimationSlideComponent delay={7600}>
                I spend my time with
            </AnimationSlideComponent>
        </>
    )

}
