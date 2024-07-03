import React from 'react';

import {SlideAnimation} from 'src/animations/slide/slide.animation';
import {Container} from 'src/components/greetings/greetings.component.styles';
import {GreetingsConstants} from 'src/components/greetings/greetings.constants';

export function GreetingsComponent() {
  return <Container>
    {GreetingsConstants.map((element) => (
      <SlideAnimation
        key={element.delay}
        delay={element.delay}
      >
        {element.text}
      </SlideAnimation>
    ))}
  </Container>;
}
