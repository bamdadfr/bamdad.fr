import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { AnimationText } from './animation.text'

const buttonColor = '#3372F5'

const Button = styled.div`
    margin-top: 2px;
    margin-bottom: 0.3em;
    box-shadow: 0px 1px 2px 1px rgba(50, 50, 50, 0.1);
    transition: all 0.2s ease-in-out;
    color: ${buttonColor};
    border-color: ${buttonColor};
    background-color: transparent;

    &:hover {
        transform: translateY(-2px);
        color: white;
        border-color: ${buttonColor};
        background-color: ${buttonColor};
    }
`

const template = (k: number, payload: ReactElement, delay: number): ReactElement => {

    return <AnimationText
        key={k}
        payload={payload}
        delay={delay}
        show
        centered
    />

}

const buttons = {
    'chatbot': (): React.ReactElement => (
        <Button
            className="button is-outlined"
            onClick={(): void => window.$crisp.push (['do', 'chat:open'])}
        >
            <span role="img" aria-label="chat">
                💬
            </span>
            &nbsp; chat with me
        </Button>
    ),
    'portfolio': (): React.ReactElement => (
        <Button
            className="button is-danger is-outlined"
        >
            <span role="img" aria-label="chat">
                👨🏻‍💻
            </span>
            &nbsp; check my work
        </Button>
    ),
    'email': (): React.ReactElement => (
        <Button
            className="button is-danger is-outlined"
            onClick={(): void => {

                window.location.href = 'mailto:hello@bamdadsabbagh.com'
            
            }}
        >
            <span role="img" aria-label="computer">
                👨🏻‍💻
            </span>
            &nbsp; email me
        </Button>
    ),
    'call': (): React.ReactElement => (
        <Button
            className="button is-warning is-outlined"
            onClick={(): void => {

                window.location.href = 'tel:+33782893699'
            
            }}
        >
            <span role="img" aria-label="phone">
                📞
            </span>
            &nbsp; call me
        </Button>
    ),
}

export const ContactData = [
    (k: number): ReactElement => template (k, <buttons.chatbot />, 4000),
    // (k: number): ReactElement => template (k, <buttons.portfolio />, 4000),
    (k: number): ReactElement => template (k, <buttons.email />, 5000),
    (k: number): ReactElement => template (k, <buttons.call />, 6000),
]