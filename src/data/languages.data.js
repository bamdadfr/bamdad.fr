import React from 'react'
import { ShuffleUtils } from '@/utils/shuffle.utils'
import { Icon } from '@iconify/react'
import ansibleIcon from '@iconify/icons-simple-icons/ansible'
import centosIcon from '@iconify/icons-simple-icons/centos'
import debianIcon from '@iconify/icons-simple-icons/debian'
import dockerIcon from '@iconify/icons-simple-icons/docker'
import githubActionsIcon from '@iconify/icons-simple-icons/githubactions'
import gnuBashIcon from '@iconify/icons-simple-icons/gnubash'
import grafanaIcon from '@iconify/icons-simple-icons/grafana'
import javascriptIcon from '@iconify/icons-simple-icons/javascript'
import laravelIcon from '@iconify/icons-simple-icons/laravel'
import mongodbIcon from '@iconify/icons-simple-icons/mongodb'
import mysqlIcon from '@iconify/icons-simple-icons/mysql'
import nextdotjsIcon from '@iconify/icons-simple-icons/next-dot-js'
import nodeDotJs from '@iconify/icons-simple-icons/node-dot-js'
import ovhIcon from '@iconify/icons-simple-icons/ovh'
import phpIcon from '@iconify/icons-simple-icons/php'
import prometheusIcon from '@iconify/icons-simple-icons/prometheus'
import pythonIcon from '@iconify/icons-simple-icons/python'
import reactIcon from '@iconify/icons-simple-icons/react'
import sassIcon from '@iconify/icons-simple-icons/sass'
import scalewayIcon from '@iconify/icons-simple-icons/scaleway'
import typescriptIcon from '@iconify/icons-simple-icons/typescript'
import webpackIcon from '@iconify/icons-simple-icons/webpack'

/**
 * @name LanguagesData
 * @description data feeding the `languages` component
 * @type {Array.<object.<string, (string | React.ReactNode)>>}
 */
export const LanguagesData = ShuffleUtils ([
    {
        'text': 'Ansible',
        'icon': <Icon icon={ansibleIcon}/>,
        'color': '#1A1918',
    },
    {
        'text': 'CentOS',
        'icon': <Icon icon={centosIcon}/>,
        'color': '#932178',
    },
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
        'text': 'Laravel',
        'icon': <Icon icon={laravelIcon}/>,
        'color': '#FF291A',
    },
    {
        'text': 'PHP',
        'icon': <Icon icon={phpIcon}/>,
        'color': '#777BB3',
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
        'text': 'OVH',
        'icon': <Icon icon={ovhIcon}/>,
        'color': '#03429A',
    },
    {
        'text': 'Prometheus',
        'icon': <Icon icon={prometheusIcon}/>,
        'color': '#ff4646',
    },
    {
        'text': 'Python',
        'icon': <Icon icon={pythonIcon}/>,
        'color': '#FFD03D',
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
        'text': 'Scaleway',
        'icon': <Icon icon={scalewayIcon}/>,
        'color': '#510098',
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