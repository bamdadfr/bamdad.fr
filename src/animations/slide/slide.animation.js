import React from 'react'
import PropTypes from 'prop-types'
import { animated, useSpring } from 'react-spring'
import useMeasure from 'react-use-measure'
import { useFirstRender } from '@/hooks/use-first-render'
import { ResizeObserver } from '@juggle/resize-observer'

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
    delay = SlideAnimation.defaultProps.delay,
    isVisible = SlideAnimation.defaultProps.isVisible,
}) {

    const [ref, { height }] = useMeasure ({ 'polyfill': ResizeObserver })
    const [firstRender] = useFirstRender (delay)

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
        'delay': () => {

            if (firstRender) return delay

            if (!isVisible) return 400

            return 0

        },
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