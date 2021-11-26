import React from 'react';
import {Icon} from '@iconify/react';
import linkedinIcon from '@iconify/icons-simple-icons/linkedin';
import githubIcon from '@iconify/icons-simple-icons/github';

export const FooterConstants = [
  {
    text: 'github',
    href: 'https://github.com/bamdadsabbagh',
    icon: <Icon icon={githubIcon} />,
    color: '#24292e',
  },
  {
    text: 'linkedin',
    href: 'https://www.linkedin.com/in/bamdadsabbagh/',
    icon: <Icon icon={linkedinIcon} />,
    color: '#0077b5',
  },
];
