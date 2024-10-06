import Icons from 'unplugin-icons/webpack';

/** @type {import('next').NextConfig} */
const config = {
  poweredByHeader: false,
  compiler: {
    emotion: true,
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

export default config;
