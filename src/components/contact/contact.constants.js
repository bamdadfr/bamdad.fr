import {theme} from '../../app/styles/theme';

export const ContactConstants = [
  {
    text: 'curriculum vitæ',
    icon: '🚀',
    color: theme.colors.button.blue,
    hover: theme.colors.white,
    delay: 4000,
    href: 'https://cv.bamdad.fr/',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    text: 'email me',
    icon: '✉️',
    color: theme.colors.button.yellow,
    hover: theme.colors.primary,
    delay: 5000,
    href: 'mailto:hi@bamdad.fr',
    target: '_self',
  },
];
