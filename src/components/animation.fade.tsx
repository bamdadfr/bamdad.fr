import React, { ReactElement } from 'react'
import { useSpring, animated } from 'react-spring'
import { IProps } from './animation.fade.types'

export const AnimationFade = (props: IProps): ReactElement => {

    const {
        payload,
        show,
        delay,
    } = props

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
