import React from 'react';
import PropTypes from 'prop-types';
import 'sass-reset';
import {useApp} from '../app/hooks/use-app/use-app';
import {WithStyledComponents} from '../app/components/with-styled-components/with-styled-components';

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
      <WithStyledComponents>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} err={err} />
      </WithStyledComponents>
    </>
  );
}

MyApp.propTypes = propTypes;
MyApp.defaultProps = defaultProps;
