import React from 'react'
import { Icon } from '@iconify/react'
import { AnimationText } from '../animations/animation-text'
import githubIcon from '@iconify/icons-simple-icons/github'
import linkedinIcon from '@iconify/icons-simple-icons/linkedin'
import npmIcon from '@iconify/icons-simple-icons/npm'

const template = (k, icon, link, aria, color) => (
    <span key={k}>
        <AnimationText
            key={k}
            payload={icon}
            link={link}
            ariaLabel={aria}
            delay={0}
            show
            hover={color}
        />
    </span>
)

export const FooterData = [
    (k) => template (
        k,
        <Icon icon={linkedinIcon}/>,
        'https://www.linkedin.com/in/bamdad-sabbagh-60228959/',
        'Link to Linkedin',
        '#0077B5',
    ),
    (k) => template (
        k,
        <Icon icon={githubIcon}/>,
        'https://github.com/bamdadsabbagh',
        'Link to GitHub',
        '#24292e',
    ),
    (k) => template (
        k,
        <Icon icon={npmIcon}/>,
        'https://www.npmjs.com/~bamdadsabbagh',
        'Link to npm',
        '#cb3837',
    ),
]

