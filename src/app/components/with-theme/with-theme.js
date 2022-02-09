import React from 'react';
import PropTypes from 'prop-types';
import {ThemeProvider} from '@emotion/react';
import {theme} from '../../styles/theme';
import {globalStyles} from '../../styles/global';

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
      {globalStyles}
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </>
  );
}

WithTheme.propTypes = propTypes;
