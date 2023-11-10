import React from 'react';
import {SlideAnimation} from '../../animations/slide/slide.animation';
import {GreetingsConstants} from './greetings.constants';
import {Container} from './greetings.component.styles';

/**
 * Component to display the greetings
 *
 * @returns {React.ReactElement} - Greetings component
 */
export function GreetingsComponent() {
  return (
    <>
      <Container>
        {GreetingsConstants.map((element) => (
          <SlideAnimation
            key={element.delay}
            delay={element.delay}
          >
            {element.text}
          </SlideAnimation>
        ))}
      </Container>
    </>
  );
}
