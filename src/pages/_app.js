import React from 'react';
import PropTypes from 'prop-types';
import 'sass-reset';
import {useApp} from '../app/hooks/use-app/use-app';
import {WithTheme} from '../app/components/with-theme/with-theme';

const propTypes = {
  Component: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  err: PropTypes.any,
};

const defaultProps = {
  err: undefined,
};

/**
 * Component to wrap the application
 *
 * @param {object} props - Component props
 * @param {Function} props.Component - Component to wrap
 * @param {object} props.pageProps - Page props
 * @param {*} props.err - Error
 * @returns {React.ReactElement} - Rendered component
 */
export default function MyApp({Component, pageProps, err}) {
  useApp();

  return (
    <>
      <WithTheme>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} err={err} />
      </WithTheme>
    </>
  );
}

MyApp.propTypes = propTypes;
MyApp.defaultProps = defaultProps;
