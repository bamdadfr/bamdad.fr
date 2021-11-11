import React from 'react';
import { render as defaultRender } from '@testing-library/react';
import { FadeAnimation } from './fade.animation';

const render = () => {
  const { container } = defaultRender (
    <FadeAnimation>
      <span>this my testing child</span>
    </FadeAnimation>,
  );

  return {
    container,
  };
};

describe ('FadeAnimation', () => {
  describe ('container', () => {
    it ('should be in the document', () => {
      const { container } = render ();
      expect (container).toBeInTheDocument ();
    });

    it ('should be visible', () => {
      const { container } = render ();
      expect (container).toBeVisible ();
    });
  });
});
