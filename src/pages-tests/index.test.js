import React from 'react';
import {render as defaultRender} from '@testing-library/react';
import IndexPage from '../pages';
import {WithStyledComponents} from '../app/components/with-styled-components/with-styled-components';

const render = () => {
  const {container} = defaultRender(
    <WithStyledComponents>
      <IndexPage />
    </WithStyledComponents>,
  );

  return {
    container,
  };
};

describe('IndexPage', () => {
  describe('container', () => {
    it('should be in the document and visible', () => {
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
