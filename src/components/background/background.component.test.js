import {render as defaultRender} from '@testing-library/react';
import React from 'react';

import {WithTheme} from '../../app/components/with-theme/with-theme';
import {BackgroundComponent} from './background.component';

const render = () => {
  const {container} = defaultRender(
    <WithTheme>
      <BackgroundComponent />
    </WithTheme>,
  );

  return {
    container,
  };
};

describe('BackgroundComponent', () => {
  describe('container', () => {
    it('should be in the document, visible and not empty', () => {
      const {container} = render();
      expect(container).toBeInTheDocument();
      expect(container).toBeVisible();
      expect(container).not.toBeEmptyDOMElement();
    });
  });
});
