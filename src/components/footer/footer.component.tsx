import React, {MouseEventHandler, ReactElement} from 'react';

import {SlideAnimation} from 'src/animations/slide/slide.animation';
import {Link, Section} from 'src/components/footer/footer.component.styles';
import {FooterConstants} from 'src/components/footer/footer.constants';

export interface FooterElement {
  href?: string;
  // @ts-expect-error
  callback?: (e: MouseEventHandler<HTMLAnchorElement, MouseEvent>) => void;
  color: string;
  text: string;
  icon: ReactElement;
  delay: number;
  offset?: number;
}

export const FooterComponent = () => (
  <Section>
    {FooterConstants.map((element) => (
      <SlideAnimation
        key={element.text}
        delay={element.delay}
      >
        <>
          {element.href && (
            <Link
              href={element.href}
              target="_blank"
              title={`link to ${element.text}`}
              color={element.color}
              rel="noopener noreferrer"
              offset={element.offset}
            >
              {element.icon}
            </Link>
          )}
          {typeof element.callback !== 'undefined' && (
            <Link
              onClick={element.callback}
              title={`link to ${element.text}`}
              color={element.color}
              offset={element.offset}
            >
              {element.icon}
            </Link>
          )}
        </>
      </SlideAnimation>
    ))}
  </Section>
);
