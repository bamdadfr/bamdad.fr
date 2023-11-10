import '@fontsource/lora';

import {css, Global} from '@emotion/react';
import React from 'react';

import {mediaQueries} from './breakpoints';
import {theme} from './theme';

const styles = css`
  body {
    font-family: 'Lora', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: ${theme.colors.primary};

    ${mediaQueries.below.mobile} {
      font-size: 1.1em;
    }

    ${mediaQueries.above.mobile} {
      font-size: 1.2em;
    }

    ${mediaQueries.above.phablet} {
      font-size: 1.3em;
    }

    ${mediaQueries.above.tablet} {
      font-size: 1.4em;
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
