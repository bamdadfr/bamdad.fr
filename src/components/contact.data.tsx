import React from 'react'
import type { ReactElement } from 'react'
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

const Render = (k: number, payload: ReactElement, delay: number): ReactElement => {

    return <AnimationText
        key={k}
        payload={payload}
        delay={delay}
        show
        centered
    />

}

const ButtonBlueprint = (
    style: string,
    link: any,
    icon: string,
    text: string,
): ReactElement => {

    return (
        <Button
            className={style}
            onClick={link}
        >
            <span role="img" aria-label={text}>
                {icon}
            </span>
            &nbsp; {text}
        </Button>
    )

}

const ButtonCV = (): ReactElement => ButtonBlueprint (
    'button is-outlined',
    (): void => {

        window.location.href = 'https://gist.github.com/bamdadsabbagh/fdaed44d9ba38b29673cccae99c89d43'
    
    },
    '📚',
    'curriculum vitæ',
)

const ButtonPortfolio = (): ReactElement => ButtonBlueprint (
    'button is-danger is-outlined',
    (): void => {

        window.location.href = 'https://github.com/bamdadsabbagh'
    
    },
    '👨🏻‍💻',
    'portfolio',
)

const ButtonEmail = (): ReactElement => ButtonBlueprint (
    'button is-warning is-outlined',
    (): void => {

        window.location.href = 'https://github.com/bamdadsabbagh'
    
    },
    '✍️',
    'email me',
)

export const ContactData = [
    // (k: number): ReactElement => template (k, <buttons.chatbot />, 4000),
    (k: number): ReactElement => Render (k, <ButtonCV />, 4000),
    (k: number): ReactElement => Render (k, <ButtonPortfolio />, 5000),
    (k: number): ReactElement => Render (k, <ButtonEmail />, 6000),
    // (k: number): ReactElement => template (k, <buttons.call />, 6000),
    // (k: number): ReactElement => template (k, <buttons.cv />, 7000),
]

// const buttons = {
//     'chatbot': ButtonBlueprint ({
//         'style': 'button is-outlined',
//         'link': (): void => window.$crisp.push (['do', 'chat:open']),
//         'icon': '💬',
//         'text': 'chat with me',
//     }),
//     'port': ButtonBlueprint ({
//         'style': 'button is-outlined',
//         'link': (): void => window.$crisp.push (['do', 'chat:open']),
//         'icon': '💬',
//         'text': 'chat with me',
//     }),
//     'call': (): React.ReactElement => (
//         <Button
//             className="button is-warning is-outlined"
//             onClick={(): void => {

//                 window.location.href = 'tel:+33782893699'
            
//             }}
//         >
//             <span role="img" aria-label="phone">
//                 📞
//             </span>
//             &nbsp; call me
//         </Button>
//     ),
// }