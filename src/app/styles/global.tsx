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
      font-size: 1.6em;
    }

    ${mediaQueries.above.mobile} {
      font-size: 1.7em;
    }

    ${mediaQueries.above.phablet} {
      font-size: 1.8em;
    }

    ${mediaQueries.above.tablet} {
      font-size: 1.9em;
    }

    ${mediaQueries.above.desktop} {
      font-size: 2em;
    }

    ${mediaQueries.above.widescreen} {
      font-size: 2.1em;
    }

    ${mediaQueries.above.fullhd} {
      font-size: 2.2em;
    }
  }
`;

export const globalStyles = <Global styles={styles} />;
