import {ReactElement} from 'react';
import {render, RenderOptions} from '@testing-library/react';
import {WithTheme} from 'src/app/components/with-theme/with-theme';

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: WithTheme, ...options});

export * from '@testing-library/react';
export {customRender as render};
