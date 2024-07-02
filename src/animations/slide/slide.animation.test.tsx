import React from 'react';
import {render} from 'src/utils/test-utils';

import {SlideAnimation} from './slide.animation';

const r = () =>
  render(
    <SlideAnimation>
      <span>children</span>
    </SlideAnimation>,
  );

describe('SlideAnimation', () => {
  describe('container', () => {
    it('should be in the document, visible and not empty', () => {
      const {container} = r();
      expect(container).toBeInTheDocument();
      expect(container).toBeVisible();
      expect(container).not.toBeEmptyDOMElement();
    });
  });
});
