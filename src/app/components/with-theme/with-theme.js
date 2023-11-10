import {ThemeProvider} from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';

import {globalStyles} from '../../styles/global';
import {theme} from '../../styles/theme';

const propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Component to wrap children with styled components
 *
 * @param {React.ReactNode} children - React children
 * @returns {React.ReactElement} - Rendered component
 */
export function WithTheme({children}) {
  return (
    <>
      <ThemeProvider theme={theme}>
        {globalStyles}
        {children}
      </ThemeProvider>
    </>
  );
}

WithTheme.propTypes = propTypes;
