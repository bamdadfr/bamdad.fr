import React from 'react'
import styled from 'styled-components'
import { Transition, animated } from 'react-spring/renderprops'

const MyLink = styled.span`
    color: inherit;
    transition: color 0.2s ease-in-out;

    &:hover {
        color: ${(props) => props.hoverColor || 'black'};
    }
`

export const AnimationText = (props) => {

    const {
        payload,
        show,
        delay,
        overflow,
        centered,
        link,
        ariaLabel,
        hover,
    } = props

    const hoverColor = () => typeof hover !== 'undefined' ? hover : 'inherit'
    const linkPreventFocus = (e) => e.currentTarget.blur ()

    const jsx = (renderProps) => {

        if (link) {

            const isMailTo = () => link.substring (0, 7) === 'mailto:'

            const style = {
                'color': 'inherit',
            }

            return (
                <animated.div style={renderProps}>
                    <MyLink hoverColor={hoverColor ()}>
                        <a
                            href={link}
                            target={isMailTo () ? '' : '_blank'}
                            rel="noopener noreferrer"
                            onFocus={(e) => linkPreventFocus (e)}
                            style={style}
                            aria-label={ariaLabel}
                        >
                            {payload}
                        </a>
                    </MyLink>
                </animated.div>
            )

        }

        return (
            <animated.div style={renderProps}>
                {payload}
            </animated.div>
        )

    }

    const paddingLeft = () => {

        if (link) {

            return 10

        }

        if (centered) {

            return 'inherit'

        }

        return 30

    }

    const display = () => link ? 'inline-block' : 'inherit'

    return (
        <Transition
            native
            items={show}
            from={{
                'overflow': overflow ? 'visible' : 'hidden',
                'height': 0,
                'opacity': 0,
                'paddingLeft': paddingLeft (),
                'display': display (),
            }}
            enter={[{
                'height': 'auto',
                'opacity': 1,
            }]}
            leave={{
                'height': 0,
                'opacity': 0,
            }}
            delay={show ? delay : 400}
        >
            {
                (s) => s && ((props) => jsx (props))
            }
        </Transition>
    )

}
