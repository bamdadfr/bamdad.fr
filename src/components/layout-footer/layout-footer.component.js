import React from 'react'
import { FooterData } from '@/data/footer.data'
import AnimationSlideComponent from '@/components/animation-slide/animation-slide.component'
import { StyledSection, StyledA } from './layout-footer.styles'

/**
 * @function
 * @name LayoutFooterComponent
 * @description layout sub component for rendering `footer`
 * @return {JSX.Element}
 */
export default function LayoutFooterComponent () {

    return (
        <>
            <StyledSection>
                {
                    FooterData.map (
                        (element) => (
                            <AnimationSlideComponent key={element.text}>
                                <StyledA
                                    href={element.href}
                                    target="_blank"
                                    title={`link to ${element.text}`}
                                    color={element.color}
                                >
                                    {element.icon}
                                </StyledA>
                            </AnimationSlideComponent>
                        ),
                    )
                }
            </StyledSection>
        </>
    )

}