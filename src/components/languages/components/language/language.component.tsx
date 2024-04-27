import React from 'react';

import {FadeAnimation} from 'src/animations/fade/fade.animation';
import {SlideAnimation} from 'src/animations/slide/slide.animation';
import {LanguagesConstants} from 'src/components/languages/languages.constants';
import {useAnimateArray} from 'src/hooks/use-animate-array/use-animate-array';
import {useWaited} from 'src/hooks/use-waited/use-waited';
import {Icon, Label, LanguageContainer} from './language.component.styles';

interface Props {
  delay: number;
}

/**
 * Component to display a language
 */
export function LanguageComponent({delay}: Props) {
  const {waited} = useWaited(delay);

  const {index, isVisible} = useAnimateArray(LanguagesConstants, {
    autostart: waited,
  });

  return (
    <>
      {waited && (
        <>
          <FadeAnimation
            delay={350}
            isVisible={isVisible}
          >
            <Icon color={LanguagesConstants[index].color}>
              {LanguagesConstants[index].icon}
            </Icon>
          </FadeAnimation>
          <LanguageContainer>
            <SlideAnimation isVisible={isVisible}>
              <Label>{LanguagesConstants[index].text}</Label>
            </SlideAnimation>
          </LanguageContainer>
        </>
      )}
    </>
  );
}
