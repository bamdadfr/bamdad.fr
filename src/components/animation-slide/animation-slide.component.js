import React from 'react'
import { animated, useSpring } from 'react-spring'

export default function AnimationSlideComponent ({ children, height = 16, delay = 0 }) {

    const props = useSpring ({
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
            <animated.div style={props}>
                {children}
            </animated.div>
        </>
    )

}