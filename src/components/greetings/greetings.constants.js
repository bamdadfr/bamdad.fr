import React from 'react';
import {Bold} from './greetings.component.styles';

export const GreetingsConstants = [
  {
    text: 'Hi 👋🏽,',
    delay: 0,
  },
  {
    text: (<>my name is <Bold>Bamdad</Bold>.</>),
    delay: 1000,
  },
  {
    text: 'I am',
    delay: 2600,
  },
  {
    text: (<>a <Bold>Front-End</Bold> developer</>),
    delay: 3000,
  },
  {
    text: 'specialized in',
    delay: 4500,
  },
  {
    text: (<><Bold>JavaScript</Bold>.</>),
    delay: 5500,
  },
];
