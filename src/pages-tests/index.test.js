import React from 'react';
import {render} from 'src/utils/test-utils';
import IndexPage from '../pages';

const r = () => render(<IndexPage />);

describe('IndexPage', () => {
  describe('container', () => {
    it('should be in the document and visible', () => {
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
