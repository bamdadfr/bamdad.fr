import React from 'react';
import {render} from 'src/utils/test-utils';

import NotFoundPage from '../pages/404';

describe('NotFoundPage', () => {
  describe('container', () => {
    it('should be in the document, visible and empty', () => {
      const {container} = render(<NotFoundPage />);
      expect(container).toBeInTheDocument();
      expect(container).toBeVisible();
      expect(container).toBeEmptyDOMElement();
    });
  });
});
