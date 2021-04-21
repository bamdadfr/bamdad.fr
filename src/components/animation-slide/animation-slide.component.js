import React from 'react'
import { animated, useSpring } from 'react-spring'
import useMeasure from 'react-use-measure'
import { useFirstRender } from '@/hooks/use-first-render'

export default function AnimationSlideComponent ({ children, delay = 0 }) {

    const [ref, { height }] = useMeasure ()
    const firstRender = useFirstRender (delay)

    const style = useSpring ({
        'from': {
            'opacity': 0,
            'height': 0,
        },
        'to': {
            'opacity': 1,
            'height': height,
        },
        'delay': firstRender ? delay : 0,
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