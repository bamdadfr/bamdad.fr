import React, {MouseEventHandler, ReactElement} from 'react';

import {SlideAnimation} from 'src/animations/slide/slide.animation';
import {Link, Section} from 'src/components/footer/footer.component.styles';
import {footerElements} from 'src/components/footer/footer.elements';

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
    {footerElements.map((element) => (
      <SlideAnimation
        key={element.text}
        delay={element.delay}
      >
        <>
          {element.href && (
            <Link
              href={element.href}
              target="_blank"
              title={element.text}
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
              title={element.text}
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
