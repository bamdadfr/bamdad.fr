import React from 'react';

import {FadeAnimation} from 'src/animations/fade/fade.animation';
import {SlideAnimation} from 'src/animations/slide/slide.animation';
import {languagesElements} from 'src/components/languages/languages.elements';
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

  const {index, isVisible} = useAnimateArray(languagesElements, {
    autostart: waited,
  });

  return (
    <div>
      {waited && (
        <>
          <FadeAnimation
            delay={350}
            isVisible={isVisible}
          >
            <Icon color={languagesElements[index].color}>
              {languagesElements[index].icon}
            </Icon>
          </FadeAnimation>
          <LanguageContainer>
            <SlideAnimation
              type="span"
              isVisible={isVisible}
            >
              <Label>{languagesElements[index].text}</Label>
            </SlideAnimation>
          </LanguageContainer>
        </>
      )}
    </div>
  );
}
