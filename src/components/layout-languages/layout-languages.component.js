import React from 'react'
import AnimationSlideComponent from '@/components/animation-slide/animation-slide.component'
import { LanguagesData } from '@/data/languages.data'
import { StyledIcon, StyledText } from './layout-languages.styles'

export default function LayoutLanguagesComponent () {

    return (
        <>
            <div>
                {
                    LanguagesData.map (
                        (element) => (
                            <AnimationSlideComponent
                                key={element.text}
                            >
                                <StyledIcon
                                    color={element.color}
                                >
                                    {element.icon}
                                </StyledIcon>
                                <StyledText>
                                    {element.text}
                                </StyledText>
                            </AnimationSlideComponent>
                        ),
                    )
                }
            </div>
            <div>
                I spend my time with
            </div>
        </>
    )

}
