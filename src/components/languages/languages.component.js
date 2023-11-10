import React from 'react';

import {SlideAnimation} from '../../animations/slide/slide.animation';
import {LanguageComponent} from './components/language/language.component';
import {Container} from './languages.component.styles';

/**
 * Component to display the languages
 *
 * @returns {React.ReactElement} - Languages component
 */
export function LanguagesComponent() {
  return (
    <Container>
      <LanguageComponent delay={8600} />
      <SlideAnimation delay={7600}>I spend my time with</SlideAnimation>
    </Container>
  );
}
