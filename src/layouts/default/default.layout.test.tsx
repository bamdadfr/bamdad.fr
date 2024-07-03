import {render} from 'src/utils/test-utils';
import React from 'react';
import {DefaultLayout} from './default.layout';

const r = () =>
  render(
    <DefaultLayout>
      <span>children</span>
      <span>children</span>
    </DefaultLayout>,
  );

describe('DefaultLayout', () => {
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
