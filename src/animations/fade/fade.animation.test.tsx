import React from 'react';
import {render} from 'src/utils/test-utils';

import {FadeAnimation} from './fade.animation';

const r = () =>
  render(
    <FadeAnimation>
      <span>this is my testing component</span>
    </FadeAnimation>,
  );

describe('FadeAnimation', () => {
  describe('container', () => {
    it('should be in the document', () => {
      const {container} = r();
      expect(container).toBeInTheDocument();
    });

    it('should be visible', () => {
      const {container} = r();
      expect(container).toBeVisible();
    });
  });
});
