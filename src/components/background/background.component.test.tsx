import React from 'react';
import {render} from 'src/utils/test-utils';

import {BackgroundComponent} from './background.component';

const r = () => render(<BackgroundComponent />);

describe('BackgroundComponent', () => {
  describe('container', () => {
    it('should be in the document, visible and not empty', () => {
      const {container} = r();
      expect(container).toBeInTheDocument();
      expect(container).toBeVisible();
      expect(container).not.toBeEmptyDOMElement();
    });
  });
});
