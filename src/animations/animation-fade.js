import React from 'react'
import { useSpring, animated } from 'react-spring'

export function AnimationFade ({ payload, show, delay }) {

    const props = useSpring ({
        'from': {
            'opacity': show ? 0 : 1,
        },
        'to': {
            'opacity': show ? 1 : 0,
        },
        'delay': show ? delay : 0,
    })

    return (
        <>
            <animated.div style={props}>
                {payload}
            </animated.div>
        </>
    )

}
