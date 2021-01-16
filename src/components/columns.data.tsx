import React from 'react'
import type { ReactElement } from 'react'
import styled from 'styled-components'
import { AnimationText } from './animation.text'
import { Languages } from './languages'

const TextDiv = styled.div`
    /* border: 1px dashed red; */
`

const template = (key: number, payload: string, delay: number): ReactElement => (

    <AnimationText key={key} payload={payload} delay={delay} show />

)

export const ColumnsData = [
    [
        (k: number): ReactElement => template (k, 'Hi 😊', 0),
        (k: number): ReactElement => template (k, 'my name is', 1800),
        (k: number): ReactElement => template (k, 'Bamdad', 2400),
        (k: number): ReactElement => template (k, 'i do', 4000),
        (k: number): ReactElement => template (k, 'sys admin, devops', 4500),
        (k: number): ReactElement => template (k, '& web dev', 5500),
    ],
    [
        (k: number): ReactElement => <Languages key={k} delay={8600} />,
        (k: number): ReactElement => (
            <TextDiv key={k} className="is-size-4-desktop is-size-5-tablet is-size-5-mobile">
                <AnimationText payload="i spend my time with" delay={7600} show overflow />
            </TextDiv>
        ),
    ],
]

