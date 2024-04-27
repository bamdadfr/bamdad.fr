import React from 'react';

import {SlideAnimation} from 'src/animations/slide/slide.animation';
import {
  Button,
  Container,
  Section,
} from 'src/components/contact/contact.component.styles';
import {ContactConstants} from 'src/components/contact/contact.constants';

/**
 * Component to display contact information
 */
export const ContactComponent = () => (
  <Section>
    <Container>
      {ContactConstants.map((element) => (
        <SlideAnimation
          key={element.text}
          delay={element.delay}
        >
          <Button
            color={element.color}
            hoverColor={element.hover}
            href={element.href}
            target={element.target}
            rel={element.rel ? element.rel : undefined}
          >
            <span>{element.icon}</span>
            {element.text}
          </Button>
        </SlideAnimation>
      ))}
    </Container>
  </Section>
);
