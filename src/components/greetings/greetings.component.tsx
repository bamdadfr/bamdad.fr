import React from 'react';

import {SlideAnimation} from 'src/animations/slide/slide.animation';
import {Container} from 'src/components/greetings/greetings.component.styles';
import {greetings} from 'src/components/greetings/greetings.constants';

export function GreetingsComponent() {
  return (
    <Container>
      {greetings.map((element) => (
        <SlideAnimation
          key={element.delay}
          delay={element.delay}
          type="span"
        >
          {element.text}
        </SlideAnimation>
      ))}
    </Container>
  );
}
