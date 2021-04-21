import React from 'react'
import styled from 'styled-components'
import { ContactData } from '@/data/contact.data'
import AnimationSlideComponent from '@/components/animation-slide/animation-slide.component'

export const StyledSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    > div {
        //margin-bottom: 2em;

        &:last-child {
            margin-bottom: 0;
        }
    }
`

export const StyledButton = styled.button`
    color: ${props => props.color};
    border: 1px solid ${props => props.color};

    box-shadow: rgb(50 50 50 / 10%) 0 1px 2px 1px;
    transition: all 0.2s ease-in-out 0s;
    padding: calc(.5em - 1px) 1em;
    border-radius: 4px;

    &:hover {
        transform: translateY(-2px);
        color: ${props => props.hover};
        background: ${props => props.color};
    }
`

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
                                height={16 * (1.5 + 1)}
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