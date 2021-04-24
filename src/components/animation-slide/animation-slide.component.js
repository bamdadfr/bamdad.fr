import React from 'react'
import PropTypes from 'prop-types'
import { animated, useSpring } from 'react-spring'
import useMeasure from 'react-use-measure'
import { useFirstRender } from '@/hooks/use-first-render'

export default function AnimationSlideComponent ({ children, delay = 0, isVisible = true }) {

    const [ref, { height }] = useMeasure ()
    const firstRender = useFirstRender (delay)

    const style = useSpring ({
        'from': {
            'opacity': isVisible ? 0 : 1,
            'height': 0,
        },
        'to': {
            'opacity': isVisible ? 1 : 0,
            'height': isVisible ? height : 0,
        },
        'delay': firstRender && isVisible ? delay : 0,
    })

    return (
        <>
            <animated.div style={{ ...style }}>
                <div ref={ref}>
                    {children}
                </div>
            </animated.div>
        </>
    )

}

AnimationSlideComponent.propTypes = {
    'children': PropTypes.node.isRequired,
    'delay': PropTypes.number,
}

AnimationSlideComponent.defaultProps = {
    'delay': 0,
}