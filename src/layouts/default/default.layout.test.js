import React from 'react';
import {render as defaultRender} from '@testing-library/react';
import {DefaultLayout} from './default.layout';
import {WithTheme} from '../../app/components/with-theme/with-theme';

const render = () => {
  const {container} = defaultRender(
    <WithTheme>
      <DefaultLayout>
        <span>children</span>
      </DefaultLayout>
    </WithTheme>,
  );

  return {
    container,
  };
};

describe('DefaultLayout', () => {
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
