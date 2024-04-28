import {Icon} from '@iconify-icon/react';
import shuffle from 'just-shuffle';
import React from 'react';

export const languagesElements = shuffle(
  [
    {
      text: 'TypeScript',
      icon: <Icon icon="simple-icons:typescript" />,
      color: '#007acc',
    },
    {
      text: 'React',
      icon: <Icon icon="simple-icons:react" />,
      color: '#60DBFB',
    },
    {
      text: 'Next.js',
      icon: <Icon icon="simple-icons:nextdotjs" />,
      color: '#000000',
    },
    {
      text: 'Jest',
      icon: <Icon icon="simple-icons:jest" />,
      color: '#99425B',
    },
    {
      text: 'Testing Library',
      icon: <Icon icon="simple-icons:testinglibrary" />,
      color: '#DB2F2F',
    },
    {
      text: 'Cypress',
      icon: <Icon icon="simple-icons:cypress" />,
      color: '#3C3C3C',
    },
    {
      text: 'webpack',
      icon: <Icon icon="simple-icons:webpack" />,
      color: '#1C78C0',
    },
    {
      text: 'GitHub Actions',
      icon: <Icon icon="simple-icons:githubactions" />,
      color: '#2088FF',
    },
    {
      text: 'D3',
      icon: <Icon icon="simple-icons:d3dotjs" />,
      color: '#F79144',
    },
    {
      text: 'Three.js',
      icon: <Icon icon="simple-icons:threedotjs" />,
      color: '#000000',
    },
    {
      text: 'Git',
      icon: <Icon icon="simple-icons:git" />,
      color: '#E94E31',
    },
    {
      text: 'Python',
      icon: <Icon icon="simple-icons:python" />,
      color: '#FFD43B',
    },
    {
      text: 'Vue.js',
      icon: <Icon icon="simple-icons:vuedotjs" />,
      color: '#41B883',
    },
    {
      text: 'Vite',
      icon: <Icon icon="simple-icons:vite" />,
      color: '#646CFF',
    },
    {
      text: 'Puppeteer',
      icon: <Icon icon="simple-icons:puppeteer" />,
      color: '#40B5A4',
    },
    {
      text: 'Electron',
      icon: <Icon icon="simple-icons:electron" />,
      color: '#47848F',
    },
  ],
  {shuffleAll: true},
);
