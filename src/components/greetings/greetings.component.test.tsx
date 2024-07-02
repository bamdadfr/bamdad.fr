import React from 'react';
import {render} from 'src/utils/test-utils';

import {GreetingsComponent} from './greetings.component';

const r = () => render(<GreetingsComponent />);

describe('GreetingsComponent', () => {
  describe('container', () => {
    it('should be defined and visible', () => {
      const {container} = r();
      expect(container).toBeInTheDocument();
      expect(container).toBeVisible();
    });

    it('should not be empty', () => {
      const {container} = r();
      expect(container).not.toBeEmptyDOMElement();
    });
  });
});
