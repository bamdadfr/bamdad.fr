import {Theme} from '../../app/styles/theme';

export const ContactConstants = [
  {
    text: 'curriculum vitæ',
    icon: '🚀',
    color: Theme.colors.button.blue,
    hover: Theme.colors.white,
    delay: 4000,
    href: 'https://cv.bamdad.fr/',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    text: 'email me',
    icon: '✉️',
    color: Theme.colors.button.yellow,
    hover: Theme.colors.primary,
    delay: 5000,
    href: 'mailto:hi@bamdad.fr',
    target: '_self',
  },
];
