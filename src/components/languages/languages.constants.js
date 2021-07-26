import React from 'react'
import { Icon } from '@iconify/react'
import debianIcon from '@iconify/icons-simple-icons/debian'
import dockerIcon from '@iconify/icons-simple-icons/docker'
import githubActionsIcon from '@iconify/icons-simple-icons/githubactions'
import gnuBashIcon from '@iconify/icons-simple-icons/gnubash'
import grafanaIcon from '@iconify/icons-simple-icons/grafana'
import javascriptIcon from '@iconify/icons-simple-icons/javascript'
import jestIcon from '@iconify/icons-simple-icons/jest'
import mongodbIcon from '@iconify/icons-simple-icons/mongodb'
import mysqlIcon from '@iconify/icons-simple-icons/mysql'
import nestjsIcon from '@iconify/icons-simple-icons/nestjs'
import nextdotjsIcon from '@iconify/icons-simple-icons/next-dot-js'
import nodeDotJs from '@iconify/icons-simple-icons/node-dot-js'
import reactIcon from '@iconify/icons-simple-icons/react'
import sassIcon from '@iconify/icons-simple-icons/sass'
import typescriptIcon from '@iconify/icons-simple-icons/typescript'
import webpackIcon from '@iconify/icons-simple-icons/webpack'
import { shuffleArray } from '../../utils'

export const LanguagesConstants = shuffleArray ([
    {
        'text': 'Debian',
        'icon': <Icon icon={debianIcon}/>,
        'color': '#D70751',
    },
    {
        'text': 'Docker',
        'icon': <Icon icon={dockerIcon}/>,
        'color': '#2496ED',
    },
    {
        'text': 'GitHub Actions',
        'icon': <Icon icon={githubActionsIcon}/>,
        'color': '#2088FF',
    },
    {
        'text': 'GNU Bash',
        'icon': <Icon icon={gnuBashIcon}/>,
        'color': '#2B3539',
    },
    {
        'text': 'Grafana',
        'icon': <Icon icon={grafanaIcon}/>,
        'color': '#F05A28',
    },
    {
        'text': 'JavaScript',
        'icon': <Icon icon={javascriptIcon}/>,
        'color': '#f0db4f',
    },
    {
        'text': 'Jest',
        'icon': <Icon icon={jestIcon}/>,
        'color': '#99425B',
    },
    {
        'text': 'MongoDB',
        'icon': <Icon icon={mongodbIcon}/>,
        'color': '#3FA037',
    },
    {
        'text': 'MySQL',
        'icon': <Icon icon={mysqlIcon}/>,
        'color': '#00618A',
    },
    {
        'text': 'NestJS',
        'icon': <Icon icon={nestjsIcon}/>,
        'color': '#E0234E',
    },
    {
        'text': 'Next.js',
        'icon': <Icon icon={nextdotjsIcon}/>,
        'color': '#000000',
    },
    {
        'text': 'Node.js',
        'icon': <Icon icon={nodeDotJs}/>,
        'color': '#68A063',
    },
    {
        'text': 'React',
        'icon': <Icon icon={reactIcon}/>,
        'color': '#60DBFB',
    },
    {
        'text': 'Sass',
        'icon': <Icon icon={sassIcon}/>,
        'color': '#cc6699',
    },
    {
        'text': 'TypeScript',
        'icon': <Icon icon={typescriptIcon}/>,
        'color': '#007acc',
    },
    {
        'text': 'webpack',
        'icon': <Icon icon={webpackIcon}/>,
        'color': '#1C78C0',
    },
])