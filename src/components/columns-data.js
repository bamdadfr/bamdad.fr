import React from 'react'
import { AnimationText } from '../animations/animation-text'
import { LayoutLanguages } from '../layout/layout-languages'

const template = (key, payload, delay) => (

    <AnimationText key={key} payload={payload} delay={delay} show/>

)

export const ColumnsData = [
    [
        (k) => template (k, 'Hi 😊', 0),
        (k) => template (k, 'my name is', 1800),
        (k) => template (k, 'Bamdad', 2400),
        (k) => template (k, 'i do', 4000),
        (k) => template (k, 'sys admin, devops', 4500),
        (k) => template (k, '& web dev', 5500),
    ],
    [
        (k) => <LayoutLanguages key={k} delay={8600}/>,
        (k) => (
            <div key={k} className="is-size-4-desktop is-size-5-tablet is-size-5-mobile">
                <AnimationText payload="i spend my time with" delay={7600} show overflow/>
            </div>
        ),
    ],
]

