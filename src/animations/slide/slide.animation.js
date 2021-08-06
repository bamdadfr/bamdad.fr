import React from 'react'
import PropTypes from 'prop-types'
import { animated, useSpring } from '@react-spring/web'
import useMeasure from 'react-use-measure'
import { ResizeObserver } from '@juggle/resize-observer'
import { useFirstRender } from '../../hooks/use-first-render/use-first-render'
import { getEnterOrLeaveDelay } from '../../utils/get-enter-or-leave-delay/get-enter-or-leave-delay'

const propTypes = {
    'children': PropTypes.node.isRequired,
    'delay': PropTypes.number,
    'isVisible': PropTypes.bool,
}

const defaultProps = {
    'delay': 0,
    'isVisible': true,
}

/**
 * @param {object} props react props
 * @param {React.ReactElement} props.children children
 * @param {number} [props.delay=0] wait before enter
 * @param {boolean} [props.isVisible=true] set to `false` to leave
 * @returns {React.ReactElement} react component
 */
export function SlideAnimation ({
    children,
    delay,
    isVisible,
}) {

    const [ref, { height }] = useMeasure ({ 'polyfill': ResizeObserver })
    const { firstRender } = useFirstRender (delay)

    const style = useSpring ({
        'from': {
            'display': 'none',
            'opacity': isVisible ? 0 : 1,
            'height': 0,
        },
        'to': {
            'display': 'block',
            'opacity': isVisible ? 1 : 0,
            'height': isVisible ? height : 0,
        },
        'delay': getEnterOrLeaveDelay (delay, firstRender, !isVisible),
    })

    return (
        <>
            <animated.div style={style}>
                <div ref={ref}>
                    {children}
                </div>
            </animated.div>
        </>
    )

}

SlideAnimation.propTypes = propTypes

SlideAnimation.defaultProps = defaultProps