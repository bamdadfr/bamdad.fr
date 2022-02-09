const {withSentryConfig} = require('@sentry/nextjs');

const moduleExports = {
  'poweredByHeader': false,
};

const SentryWebpackPluginOptions = {};

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions);
