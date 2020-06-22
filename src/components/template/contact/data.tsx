import React, { ReactElement } from 'react'
import styled from 'styled-components'
import SpringText from '../../spring/text'

const chatbotColor = '#3372F5'

const Chatbot = styled.div`
    margin-top: 2px;
    margin-bottom: 0.3em;
    box-shadow: 0px 1px 2px 1px rgba(50, 50, 50, 0.1);
    transition: all 0.2s ease-in-out;
    color: ${chatbotColor};
    border-color: ${chatbotColor};
    background-color: transparent;

    &:hover {
        transform: translateY(-2px);
        color: white;
        border-color: ${chatbotColor};
        background-color: ${chatbotColor};
    }
`

const Portfolio = styled.div`
    margin-top: 0.1em;
    margin-bottom: 0.3em;
`

const template = (k: number, payload: ReactElement, delay: number): ReactElement => {

    return <SpringText
        key={k}
        payload={payload}
        delay={delay}
        show
        centered
    />

}

const buttons = {
    'chatbot': (): React.ReactElement => (
        <Chatbot
            className="button is-outlined"
            onClick={(): void => window.$crisp.push (['do', 'chat:open'])}
        >
            <span role="img" aria-label="chat">
                💬
            </span>
            &nbsp; chat with me
        </Chatbot>
    ),
    'portfolio': (): React.ReactElement => (
        <Portfolio
            className="button is-danger is-outlined"
            onClick={(): void => window.$crisp.push (['do', 'chat:open'])}
        >
            <span role="img" aria-label="chat">
                👨🏻‍💻
            </span>
            &nbsp; check my work
        </Portfolio>
    ),
}

export default [
    (k: number): ReactElement => template (k, <buttons.chatbot />, 4000),
    // (k: number): ReactElement => template (k, <buttons.portfolio />, 12500),
]