import React from 'react'
import AnimationSlideComponent from '@/components/animation-slide/animation-slide.component'
import { LanguagesData } from '@/data/languages.data'
import AnimationFadeComponent from '@/components/animation-fade/animation-fade.component'
import { useWaited } from '@/hooks/use-waited'
import { useAnimateArray } from '@/hooks/use-animate-array'
import { StyledContainer, StyledIcon, StyledText, StyledTextContainer } from './layout-languages.styles'

/**
 * @function
 * @name LayoutLanguagesComponent
 * @description layout sub component for rendering `languages`
 * @return {JSX.Element}
 */
export default function LayoutLanguagesComponent () {

    const [waited] = useWaited (8600)

    const [{ index, isVisible }] = useAnimateArray (LanguagesData, {
        'start': waited,
    })

    return (
        <>
            <StyledContainer>
                {
                    waited
                        ?
                        (
                            <>
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
                            </>
                        )
                        :
                        null
                }
                <AnimationSlideComponent delay={7600}>
                    I spend my time with
                </AnimationSlideComponent>
            </StyledContainer>
        </>
    )

}
