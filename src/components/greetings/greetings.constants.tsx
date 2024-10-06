import React from 'react';

import {Bold} from 'src/components/greetings/greetings.component.styles';
import {D} from 'src/constants';

export const GreetingsConstants = [
  {
    text: 'Hi 👋🏽,',
    delay: D.g.hi,
  },
  {
    text: (
      <>
        my name is <Bold>Bamdad</Bold>.
      </>
    ),
    delay: D.g.name,
  },
  {
    text: 'I am',
    delay: D.g.iAm,
  },
  {
    text: (
      <>
        a <Bold>Web</Bold> developer
      </>
    ),
    delay: D.g.developer,
  },
  {
    text: 'specialized in',
    delay: D.g.specialized,
  },
  {
    text: (
      <>
        <Bold>Front End</Bold>.
      </>
    ),
    delay: D.g.javascript,
  },
];
