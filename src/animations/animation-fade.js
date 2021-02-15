import React from 'react'
import { useSpring, animated } from 'react-spring'

export const AnimationFade = (props) => {

    const { payload, show, delay } = props

    const renderProps = useSpring ({
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
            <animated.div style={renderProps}>
                {payload}
            </animated.div>
        </>
    )

}
