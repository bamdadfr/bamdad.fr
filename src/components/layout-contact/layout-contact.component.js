import React from 'react'
import { ContactData } from '@/data/contact.data'
import AnimationSlideComponent from '@/components/animation-slide/animation-slide.component'
import { StyledSection, StyledButton } from './layout-contact.styles'

export default function LayoutContactComponent () {

    return (
        <>
            <StyledSection>
                {
                    ContactData.map (
                        (element) => (
                            <AnimationSlideComponent
                                key={element.text}
                                delay={element.delay}
                            >
                                <StyledButton
                                    color={element.color}
                                    hover={element.hover}
                                    onClick={() => element.onClick ()}
                                >
                                    <span>
                                        {element.icon}
                                    </span>
                                    {' '}
                                    {element.text}
                                </StyledButton>
                            </AnimationSlideComponent>
                        ),
                    )
                }
            </StyledSection>
        </>
    )

}