import React from 'react';
import {render as defaultRender} from '@testing-library/react';
import {BackgroundComponent} from './background.component';
import {WithTheme} from '../../app/components/with-theme/with-theme';

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
