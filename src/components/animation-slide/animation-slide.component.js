import React from 'react'
import { animated, useSpring } from 'react-spring'
import useMeasure from 'react-use-measure'

export default function AnimationSlideComponent ({ children, delay = 0 }) {

    const [ref, { height }] = useMeasure ()

    const style = useSpring ({
        'from': {
            'display': 'none',
            'opacity': 0,
            'height': 0,
        },
        'to': {
            'display': 'inline',
            'opacity': 1,
            'height': height,
        },
        'delay': delay,
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