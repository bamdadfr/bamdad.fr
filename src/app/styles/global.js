import {createGlobalStyle} from 'styled-components';
import {Theme} from './theme';
import {Breakpoints} from './breakpoints';
import '@fontsource/lora';

export const Global = createGlobalStyle`
  body {
    font-family: 'Lora', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: ${Theme.colors.primary};

    @media screen and (max-width: ${Breakpoints.mobile - 1}px) {
      font-size: 1.1em;
    }

    @media screen and (min-width: ${Breakpoints.mobile}px) {
      font-size: 1.2em;
    }

    @media screen and (min-width: ${Breakpoints.phablet}px) {
      font-size: 1.3em;
    }

    @media screen and (min-width: ${Breakpoints.tablet}px) {
      font-size: 1.4em;
    }

    @media screen and (min-width: ${Breakpoints.desktop}px) {
      font-size: 1.5em;
    }

    @media screen and (min-width: ${Breakpoints.widescreen}px) {
      font-size: 1.6em;
    }

    @media screen and (min-width: ${Breakpoints.fullhd}px) {
      font-size: 1.7em;
    }
  }
`;
