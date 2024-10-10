import {DefaultSeoProps} from 'next-seo';

const title = 'Bamdad Sabbagh - Web Developer';
const description =
  'Hi 👋🏽, my name is Bamdad. I am a Web Developer specialized in Front End.';

const url = 'https://www.bamdad.fr';

export const SEO: DefaultSeoProps = {
  defaultTitle: title,
  description,
  canonical: url,
  norobots: false,
  openGraph: {
    title,
    description,
    siteName: title,
    type: 'website',
    locale: 'en_US',
    url,
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
      href: '/favicon/apple-touch-icon.png',
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
