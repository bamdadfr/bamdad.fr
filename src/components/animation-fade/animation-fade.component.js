import React from 'react'
import { animated, useSpring } from 'react-spring'

export default function AnimationFadeComponent ({ children, delay = 0, isVisible = true }) {

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