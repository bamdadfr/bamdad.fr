const {withSentryConfig} = require('@sentry/nextjs');

const moduleExports = {
  poweredByHeader: false,
};

const SentryWebpackPluginOptions = {
  hideSourceMaps: true,
};

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions);
