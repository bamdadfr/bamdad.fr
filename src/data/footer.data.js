import React from 'react'
import { Icon } from '@iconify/react'
import linkedinIcon from '@iconify/icons-simple-icons/linkedin'
import githubIcon from '@iconify/icons-simple-icons/github'
import npmIcon from '@iconify/icons-simple-icons/npm'

/**
 * @name FooterData
 * @description data feeding the `footer` component
 * @type {Array.<Object.<String, (String, JSX.Element)>>}
 */
export const FooterData = [
    {
        'text': 'linkedin',
        'href': 'https://www.linkedin.com/in/bamdadsabbagh/',
        'icon': <Icon icon={linkedinIcon}/>,
        'color': '#0077b5',
    },
    {
        'text': 'github',
        'href': 'https://github.com/bamdadsabbagh',
        'icon': <Icon icon={githubIcon}/>,
        'color': '#24292e',
    },
    {
        'text': 'npm',
        'href': 'https://www.npmjs.com/~bamdadsabbagh',
        'icon': <Icon icon={npmIcon}/>,
        'color': '#cb3837',
    },
]