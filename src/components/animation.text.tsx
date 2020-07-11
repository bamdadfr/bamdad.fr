import React from 'react'
import styled from 'styled-components'
import { Transition, animated } from 'react-spring/renderprops'

interface Props {
    payload: string|React.ReactElement,
    show: boolean
    delay: number
    overflow?: true
    centered?: true
    link?: string
    ariaLabel?: string
    hover?: string
}

// TODO: UseTransitionResult<TItem, DS extends object>
// https://github.com/react-spring/react-spring/blob/master/types/web.d.ts#L210
type RenderProps = object

export const AnimationText = (props: Props): React.ReactElement => {

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

    const hoverColor = (): string => typeof hover !== 'undefined' ? hover : 'inherit'
    const linkPreventFocus = (e: React.FocusEvent<HTMLAnchorElement>): void => e.currentTarget.blur ()

    const jsx = (renderProps: RenderProps): React.ReactElement => {

        if (link) {

            const isMailTo = (): boolean => link.substring (0, 7) === 'mailto:'

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
                            onFocus={(e): void => linkPreventFocus (e)}
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

    const paddingLeft = (): number|string => {

        if (link) {

            return 10
        
        }

        if (centered) {

            return 'inherit'
        
        }

        return 30
    
    }

    const display = (): string => link ? 'inline-block' : 'inherit'

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
                (s): any => s && ((props: any): any => jsx (props))
            }
        </Transition>
    )

}

const MyLink = styled.span<any>`
    color: inherit;
    transition: color 0.2s ease-in-out;

    &:hover {
        color: ${(props: any): any => props.hoverColor || 'black'};
    }
`