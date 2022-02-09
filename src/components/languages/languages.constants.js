import React from 'react';
import shuffle from 'just-shuffle';
import {Icon} from '@iconify/react';
import typescriptIcon from '@iconify/icons-simple-icons/typescript';
import reactIcon from '@iconify/icons-simple-icons/react';
import nextdotjsIcon from '@iconify/icons-simple-icons/nextdotjs';
import reduxIcon from '@iconify/icons-simple-icons/redux';
import jestIcon from '@iconify/icons-simple-icons/jest';
import testingLibraryIcon from '@iconify/icons-simple-icons/testinglibrary';
import cypressIcon from '@iconify/icons-simple-icons/cypress';
import puppeteerIcon from '@iconify/icons-simple-icons/puppeteer';
import webpackIcon from '@iconify/icons-simple-icons/webpack';
import babelIcon from '@iconify/icons-simple-icons/babel';
import viteIcon from '@iconify/icons-simple-icons/vite';
import githubActionsIcon from '@iconify/icons-simple-icons/githubactions';
import immerIcon from '@iconify/icons-simple-icons/immer';
import reactivexIcon from '@iconify/icons-simple-icons/reactivex';
import d3dotjsIcon from '@iconify/icons-simple-icons/d3dotjs';
import threedotjsIcon from '@iconify/icons-simple-icons/threedotjs';
import gitIcon from '@iconify/icons-simple-icons/git';

export const LanguagesConstants = shuffle([
  {
    'text': 'TypeScript',
    'icon': <Icon icon={typescriptIcon} />,
    'color': '#007acc',
  },
  {
    'text': 'React',
    'icon': <Icon icon={reactIcon} />,
    'color': '#60DBFB',
  },
  {
    'text': 'Next.js',
    'icon': <Icon icon={nextdotjsIcon} />,
    'color': '#000000',
  },
  {
    'text': 'Redux',
    'icon': <Icon icon={reduxIcon} />,
    'color': '#764abc',
  },
  {
    'text': 'Jest',
    'icon': <Icon icon={jestIcon} />,
    'color': '#99425B',
  },
  {
    'text': 'Testing Library',
    'icon': <Icon icon={testingLibraryIcon} />,
    'color': '#DB2F2F',
  },
  {
    'text': 'Cypress',
    'icon': <Icon icon={cypressIcon} />,
    'color': '#3C3C3C',
  },
  {
    'text': 'Puppeteer',
    'icon': <Icon icon={puppeteerIcon} />,
    'color': '#4FD7A2',
  },
  {
    'text': 'webpack',
    'icon': <Icon icon={webpackIcon} />,
    'color': '#1C78C0',
  },
  {
    'text': 'Babel',
    'icon': <Icon icon={babelIcon} />,
    'color': '#F9DC3D',
  },
  {
    'text': 'Vite',
    'icon': <Icon icon={viteIcon} />,
    'color': '#F9D32C',
  },
  {
    'text': 'GitHub Actions',
    'icon': <Icon icon={githubActionsIcon} />,
    'color': '#2088FF',
  },
  {
    'text': 'Immer',
    'icon': <Icon icon={immerIcon} />,
    'color': '#00E7C3',
  },
  {
    'text': 'RxJS',
    'icon': <Icon icon={reactivexIcon} />,
    'color': '#F4218A',
  },
  {
    'text': 'D3',
    'icon': <Icon icon={d3dotjsIcon} />,
    'color': '#F79144',
  },
  {
    'text': 'Three.js',
    'icon': <Icon icon={threedotjsIcon} />,
    'color': '#000000',
  },
  {
    'text': 'Git',
    'icon': <Icon icon={gitIcon} />,
    'color': '#E94E31',
  },
]);
