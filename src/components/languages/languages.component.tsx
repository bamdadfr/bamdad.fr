import React from 'react';

import {SlideAnimation} from 'src/animations/slide/slide.animation';
import {LanguageComponent} from 'src/components/languages/components/language/language.component';
import {Container} from 'src/components/languages/languages.component.styles';
import {D} from 'src/constants';

/**
 * Component to display the languages
 */
export function LanguagesComponent() {
  return (
    <Container>
      <LanguageComponent delay={D.l.icon} />
      <SlideAnimation delay={D.l.title}>I spend my time with</SlideAnimation>
    </Container>
  );
}
