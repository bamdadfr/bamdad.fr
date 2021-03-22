import React from 'react'
import styled from 'styled-components'
import { AnimationText } from '../animations/animation-text'

const buttonColor = '#3372F5'

const Button = styled.div`
  margin-top: 2px;
  margin-bottom: 0.3em;
  box-shadow: 0 1px 2px 1px rgba(50, 50, 50, 0.1);
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

const Render = (key, payload, delay) => (
    <AnimationText
        key={key}
        payload={payload}
        delay={delay}
        show
        centered
    />
)

const ButtonBlueprint = (style, link, icon, text) => (
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

const ButtonResume = () => ButtonBlueprint (
    'button is-outlined',
    () => {

        window.open ('https://resume.bamdadsabbagh.com', '_blank')

    },
    '📚',
    'resume',
)

const ButtonPortfolio = () => ButtonBlueprint (
    'button is-danger is-outlined',
    () => {

        window.open ('https://portfolio.bamdadsabbagh.com', '_blank')

    },
    '👨🏻‍💻',
    'portfolio',
)

const ButtonEmail = () => ButtonBlueprint (
    'button is-warning is-outlined',
    () => {

        window.location.href = 'mailto:hello@bamdadsabbagh.com'

    },
    '✍️',
    'email me',
)

export const ContactData = [
    (k) => Render (k, <ButtonResume/>, 4000),
    (k) => Render (k, <ButtonPortfolio/>, 5000),
    (k) => Render (k, <ButtonEmail/>, 6000),
]
