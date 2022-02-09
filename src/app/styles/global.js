import React from 'react';
import {css, Global} from '@emotion/react';
import {theme} from './theme';
import {mediaQueries} from './breakpoints';
import '@fontsource/lora';

const styles = css`
  body {
    font-family: 'Lora', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: ${theme.colors.primary};

    ${mediaQueries.below.mobile} {
      font-size: 1.1em;
      background: red;
    }

    ${mediaQueries.above.mobile} {
      font-size: 1.2em;
      background: red;
    }

    ${mediaQueries.above.phablet} {
      font-size: 1.3em;
      background: red;
    }

    ${mediaQueries.above.tablet} {
      font-size: 1.4em;
      background: red;
    }

    ${mediaQueries.above.desktop} {
      font-size: 1.5em;
    }

    ${mediaQueries.above.widescreen} {
      font-size: 1.6em;
    }

    ${mediaQueries.above.fullhd} {
      font-size: 1.7em;
    }
  }
`;

export const globalStyles = <Global styles={styles} />;
