import React from 'react';

import {SlideAnimation} from '../../animations/slide/slide.animation';
import {Button, Container, Section} from './contact.component.styles';
import {ContactConstants} from './contact.constants';

/**
 * Component to display contact information
 *
 * @returns {React.ReactElement} - Contact component
 */
export function ContactComponent() {
  return (
    <>
      <Section>
        <Container>
          {ContactConstants.map((element) => (
            <SlideAnimation
              key={element.text}
              delay={element.delay}
            >
              <Button
                color={element.color}
                hover={element.hover}
                href={element.href}
                target={element.target}
                rel={element.rel ? element.rel : null}
              >
                <span>{element.icon}</span> {element.text}
              </Button>
            </SlideAnimation>
          ))}
        </Container>
      </Section>
    </>
  );
}
