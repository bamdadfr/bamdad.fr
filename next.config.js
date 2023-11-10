const {withSentryConfig} = require('@sentry/nextjs');

const moduleExports = {
  poweredByHeader: false,
};

const SentryWebpackPluginOptions = {
  hideSourcemaps: true,
};

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions);
