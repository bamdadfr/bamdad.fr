import 'sass-reset';
import {type AppProps} from 'next/app';
import React from 'react';

import {WithTheme} from 'src/app/components/with-theme/with-theme';
import {useApp} from 'src/app/hooks/use-app/use-app';

interface Props extends AppProps {
  err: unknown;
}

export default function MyApp({Component, pageProps, err}: Props) {
  useApp();

  return (
    <WithTheme>
      <Component
        /* eslint-disable-next-line react/jsx-props-no-spreading */
        {...pageProps}
        err={err}
      />
    </WithTheme>
  );
}
