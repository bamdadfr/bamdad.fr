import {ThemeProvider} from '@emotion/react';
import React, {ReactElement} from 'react';

import {globalStyles} from 'src/app/styles/global';
import {theme} from 'src/app/styles/theme';

interface Props {
  children: ReactElement;
}

export function WithTheme({children}: Props) {
  return <ThemeProvider theme={theme}>
    {globalStyles}
    {children}
  </ThemeProvider>;
}
