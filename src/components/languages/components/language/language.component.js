import React from 'react'
import PropTypes from 'prop-types'
import { FadeAnimation } from '../../../../animations/fade/fade.animation'
import { SlideAnimation } from '../../../../animations/slide/slide.animation'
import { Icon, Label, LanguageContainer } from './language.component.styles'
import { LanguagesConstants } from '../../languages.constants'
import { useAnimateArray } from '../../../../hooks/use-animate-array/use-animate-array'
import { useWaited } from '../../../../hooks/use-waited/use-waited'

const propTypes = {
    'delay': PropTypes.number.isRequired,
}

/**
 * @param {object} props react props
 * @param {number} props.delay delay before first render
 * @returns {React.ReactElement} react component
 */
export function LanguageComponent ({ delay }) {

    const { waited } = useWaited (delay)

    const { index, isVisible } = useAnimateArray (LanguagesConstants, {
        'autostart': waited,
    })

    return (
        <>
            {
                waited && <>
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
            }
        </>
    )

}

LanguageComponent.propTypes = propTypes