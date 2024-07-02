import {Icon} from '@iconify-icon/react';
import React from 'react';
import {FooterElement} from 'src/components/footer/footer.component';
import {D} from 'src/constants';

export const footerElements: FooterElement[] = [
  {
    text: 'github',
    href: 'https://github.com/bamdadfr',
    icon: <Icon icon="ph:github-logo" />,
    color: '#24292e',
    delay: D.f.github,
  },
  {
    text: 'email',
    callback: (e) => {
      e.stopPropagation();
      e.preventDefault();
      window.open('mailto:hi@bamdad.fr', '_self');
    },
    icon: <Icon icon="ph:mailbox" />,
    color: '#24292e',
    offset: 1,
    delay: D.f.email,
  },
];
