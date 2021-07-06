import React from 'react'
import { ContactData } from '@/data/contact.data'
import AnimationSlideComponent from '@/components/animation-slide/animation-slide.component'
import { StyledSection, StyledContainer, StyledButton } from './layout-contact.styles'

/**
 * @function
 * @name LayoutContactComponent
 * @description layout sub component for rendering `contact` part
 * @returns {React.ReactNode} - react component
 */
export default function LayoutContactComponent () {

    return (
        <>
            <StyledSection>
                <StyledContainer>
                    {
                        ContactData.map (
                            (element) => (
                                <AnimationSlideComponent key={element.text} delay={element.delay}>
                                    <StyledButton
                                        color={element.color}
                                        hover={element.hover}
                                        // onClick={useCallback (() => element.onClick (), [])}
                                        href={element.href}
                                        target={element.target}
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
                </StyledContainer>
            </StyledSection>
        </>
    )

}