import React from 'react'
import { ShuffleUtils } from '@/utils/shuffle.utils'
import { Icon } from '@iconify/react'
import ansibleIcon from '@iconify/icons-simple-icons/ansible'
import archlinuxIcon from '@iconify/icons-simple-icons/archlinux'
import centosIcon from '@iconify/icons-simple-icons/centos'
import debianIcon from '@iconify/icons-simple-icons/debian'
import dockerIcon from '@iconify/icons-simple-icons/docker'
import githubActionsIcon from '@iconify/icons-simple-icons/githubactions'
import gnuBashIcon from '@iconify/icons-simple-icons/gnubash'
import grafanaIcon from '@iconify/icons-simple-icons/grafana'
import laravelIcon from '@iconify/icons-simple-icons/laravel'
import magentoIcon from '@iconify/icons-simple-icons/magento'
import mongodbIcon from '@iconify/icons-simple-icons/mongodb'
import mysqlIcon from '@iconify/icons-simple-icons/mysql'
import nodeDotJs from '@iconify/icons-simple-icons/node-dot-js'
import ovhIcon from '@iconify/icons-simple-icons/ovh'
import phpIcon from '@iconify/icons-simple-icons/php'
import prometheusIcon from '@iconify/icons-simple-icons/prometheus'
import pythonIcon from '@iconify/icons-simple-icons/python'
import reactIcon from '@iconify/icons-simple-icons/react'
import redisIcon from '@iconify/icons-simple-icons/redis'
import scalewayIcon from '@iconify/icons-simple-icons/scaleway'
import typescriptIcon from '@iconify/icons-simple-icons/typescript'
import webpackIcon from '@iconify/icons-simple-icons/webpack'

/**
 * @name LanguagesData
 * @description data feeding the `languages` component
 * @type {Array.<Object.<String, (String, JSX.Element)>>} - shuffled with `ShuffleUtils`
 */
export const LanguagesData = ShuffleUtils ([
    {
        'text': 'ansible',
        'icon': <Icon icon={ansibleIcon}/>,
        'color': '#1A1918',
    },
    {
        'text': 'arch linux',
        'icon': <Icon icon={archlinuxIcon}/>,
        'color': '#1793D1',
    },
    {
        'text': 'centos',
        'icon': <Icon icon={centosIcon}/>,
        'color': '#932178',
    },
    {
        'text': 'debian',
        'icon': <Icon icon={debianIcon}/>,
        'color': '#D70751',
    },
    {
        'text': 'docker',
        'icon': <Icon icon={dockerIcon}/>,
        'color': '#2496ED',
    },
    {
        'text': 'github actions',
        'icon': <Icon icon={githubActionsIcon}/>,
        'color': '#2088FF',
    },
    {
        'text': 'gnu bash',
        'icon': <Icon icon={gnuBashIcon}/>,
        'color': '#2B3539',
    },
    {
        'text': 'grafana',
        'icon': <Icon icon={grafanaIcon}/>,
        'color': '#F05A28',
    },
    {
        'text': 'laravel',
        'icon': <Icon icon={laravelIcon}/>,
        'color': '#FF291A',
    },
    {
        'text': 'php',
        'icon': <Icon icon={phpIcon}/>,
        'color': '#777BB3',
    },
    {
        'text': 'magento',
        'icon': <Icon icon={magentoIcon}/>,
        'color': '#F2631C',
    },
    {
        'text': 'mongodb',
        'icon': <Icon icon={mongodbIcon}/>,
        'color': '#3FA037',
    },
    {
        'text': 'mysql',
        'icon': <Icon icon={mysqlIcon}/>,
        'color': '#00618A',
    },
    {
        'text': 'nodejs',
        'icon': <Icon icon={nodeDotJs}/>,
        'color': '#68A063',
    },
    {
        'text': 'ovh',
        'icon': <Icon icon={ovhIcon}/>,
        'color': '#03429A',
    },
    {
        'text': 'prometheus',
        'icon': <Icon icon={prometheusIcon}/>,
        'color': '#ff4646',
    },
    {
        'text': 'python',
        'icon': <Icon icon={pythonIcon}/>,
        'color': '#FFD03D',
    },
    {
        'text': 'react',
        'icon': <Icon icon={reactIcon}/>,
        'color': '#60DBFB',
    },
    {
        'text': 'redis',
        'icon': <Icon icon={redisIcon}/>,
        'color': '#D82C20',
    },
    {
        'text': 'scaleway',
        'icon': <Icon icon={scalewayIcon}/>,
        'color': '#510098',
    },
    {
        'text': 'typescript',
        'icon': <Icon icon={typescriptIcon}/>,
        'color': '#007acc',
    },
    {
        'text': 'webpack',
        'icon': <Icon icon={webpackIcon}/>,
        'color': '#1C78C0',
    },
])