import React from 'react'
import PropTypes from 'prop-types'
import { animated, useSpring } from 'react-spring'

/**
 * @function
 * @name AnimationFadeComponent
 * @description fade in component using `react-spring`
 * @param {JSX.Element} children - react functional component to render
 * @param {Number} [delay=0] - delay before triggering the animation
 * @param {Boolean} [isVisible=true] - will fade out the component if set to `false`
 * @return {JSX.Element}
 */
export default function AnimationFadeComponent ({
    children,
    delay = AnimationFadeComponent.defaultProps.delay,
    isVisible = AnimationFadeComponent.defaultProps.isVisible,
}) {

    const style = useSpring ({
        'from': {
            'opacity': isVisible ? 0 : 1,
        },
        'to': {
            'opacity': isVisible ? 1 : 0,
        },
        'delay': isVisible ? delay : 0,
    })

    return (
        <>
            <animated.div style={style}>
                {children}
            </animated.div>
        </>
    )

}

AnimationFadeComponent.defaultProps = {
    'delay': 0,
    'isVisible': true,
}

AnimationFadeComponent.propTypes = {
    'children': PropTypes.node.isRequired,
    'delay': PropTypes.number,
    'isVisible': PropTypes.bool,
}