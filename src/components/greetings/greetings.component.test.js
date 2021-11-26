import React from 'react';
import {render as defaultRender} from '@testing-library/react';
import {GreetingsComponent} from './greetings.component';

const render = () => {
  const {container} = defaultRender(
    <GreetingsComponent />,
  );

  return {
    container,
  };
};

describe('GreetingsComponent', () => {
  describe('container', () => {
    it('should be defined and visible', () => {
      const {container} = render();
      expect(container).toBeInTheDocument();
      expect(container).toBeVisible();
    });

    it('should not be empty', () => {
      const {container} = render();
      expect(container).not.toBeEmptyDOMElement();
    });
  });
});
