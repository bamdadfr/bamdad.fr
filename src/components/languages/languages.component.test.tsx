import React from 'react';
import {render} from 'src/utils/test-utils';

import {LanguagesComponent} from './languages.component';

const r = () => render(<LanguagesComponent />);

describe('LanguagesComponent', () => {
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
