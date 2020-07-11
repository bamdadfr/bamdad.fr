import React, { ReactElement } from 'react'
// icons
import { Icon } from '@iconify/react'
import stackshareIcon from '@iconify/icons-simple-icons/stackshare'
import githubIcon from '@iconify/icons-simple-icons/github'
import linkedinIcon from '@iconify/icons-simple-icons/linkedin'
import npmIcon from '@iconify/icons-simple-icons/npm'
import SpringText from '../../spring/text'

const template = (k: number, icon: ReactElement, link: string, aria: string, color: string): ReactElement => {

    return <SpringText
        key={k}
        payload={icon}
        link={link}
        ariaLabel={aria}
        delay={0}
        show
        hover={color}
    />

}

export default [
    (k: number): ReactElement => template (
        k,
        <Icon icon={linkedinIcon} />,
        'https://www.linkedin.com/in/bamdad-sabbagh-60228959/',
        'Link to Linkedin',
        '#0077B5',
    ),
    // (k: number): ReactElement => template (
    //     k,
    //     <Icon icon={gitlabIcon} />,
    //     'https://gitlab.com/bamdadsabbagh',
    //     'Link to Gitlab',
    //     '#db3b21',
    // ),
    (k: number): ReactElement => template (
        k,
        <Icon icon={githubIcon} />,
        'https://github.com/bamdadsabbagh',
        'Link to GitHub',
        '#24292e',
    ),
    (k: number): ReactElement => template (
        k,
        <Icon icon={npmIcon} />,
        'https://www.npmjs.com/~bamdadsabbagh',
        'Link to npm',
        '#cb3837',
    ),
    (k: number): ReactElement => template (
        k,
        <Icon icon={stackshareIcon} />,
        'https://stackshare.io/bamdadsabbagh/my-stack',
        'Link to Stackshare',
        '#0690FA',
    ),
]

