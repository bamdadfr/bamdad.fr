import React from 'react';
import { render as defaultRender } from '@testing-library/react';
import { ContactComponent } from './contact.component';

const render = () => {
  const { container } = defaultRender (
    <ContactComponent />,
  );

  return {
    container,
  };
};

describe ('ContactComponent', () => {
  describe ('container', () => {
    it ('should be defined and visible', () => {
      const { container } = render ();
      expect (container).toBeInTheDocument ();
      expect (container).toBeVisible ();
    });

    it ('should not be empty', () => {
      const { container } = render ();
      expect (container).not.toBeEmptyDOMElement ();
    });
  });
});
