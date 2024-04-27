import {withSentryConfig} from '@sentry/nextjs';
import Icons from 'unplugin-icons/webpack';

/** @type {import('next').NextConfig} */
const config = {
  poweredByHeader: false,
  compiler: {
    emotion: true,
  },
  sentry: {
    hideSourceMaps: true,
  },
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(
      Icons({
        compiler: 'jsx',
        jsx: 'react',
      }),
    );

    return config;
  },
};

const sentryOptions = {
  hideSourceMaps: true,
};

export default withSentryConfig(config, sentryOptions);
