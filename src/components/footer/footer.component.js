import React from 'react';

import {SlideAnimation} from '../../animations/slide/slide.animation';
import {Link, Section} from './footer.component.styles';
import {FooterConstants} from './footer.constants';

/**
 * Component to render the footer
 *
 * @returns {React.ReactElement} - Footer component
 */
export function FooterComponent() {
  return (
    <Section>
      {FooterConstants.map((element) => (
        <SlideAnimation
          key={element.text}
          delay={2000}
        >
          <Link
            href={element.href}
            target="_blank"
            title={`link to ${element.text}`}
            color={element.color}
            rel="noopener noreferrer"
          >
            {element.icon}
          </Link>
        </SlideAnimation>
      ))}
    </Section>
  );
}
