import {DefaultSeoProps} from 'next-seo';

export const SEO: DefaultSeoProps = {
  defaultTitle: 'Bamdad Sabbagh',
  description: 'Web Developer',
  canonical: 'https://www.bamdad.fr/',
  norobots: false,
  openGraph: {
    title: 'Bamdad Sabbagh',
    description: 'Web Developer',
    siteName: 'Bamdad Sabbagh',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.bamdad.fr/',
    images: [
      {
        url: '/favicon/android-chrome-512x512.png',
        width: 512,
        height: 512,
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'manifest',
      href: '/favicon/site.webmanifest',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: 'favicon/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'mask-icon',
      href: '/favicon/safari-pinned-tab.svg',
      color: '#5bbad5',
    },
  ],
  additionalMetaTags: [
    {
      name: 'msapplication-TileColor',
      content: '#da532c',
    },
    {
      name: 'theme-color',
      content: '#ffffff',
    },
  ],
};
