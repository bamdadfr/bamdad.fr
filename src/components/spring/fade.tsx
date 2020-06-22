import React from 'react'
import { useSpring, animated } from 'react-spring'

interface Props {
    payload: React.ReactElement,
    show: boolean,
    delay: number,
}

export default function (props: Props): React.ReactElement {

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
