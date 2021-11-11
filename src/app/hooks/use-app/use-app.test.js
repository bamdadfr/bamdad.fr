import { renderHook } from '@testing-library/react-hooks';
import { useApp } from './use-app';

describe ('useApp', () => {
  it ('should mount correctly', () => {
    renderHook (() => useApp ());
  });
});
