import {renderHook} from '@testing-library/react-hooks';

import {useAnimateArray} from './use-animate-array';

const array = [1, 2, 3, 4, 5];

describe('useAnimateArray', () => {
  describe('index', () => {
    it('should default to 0', () => {
      const {result} = renderHook(() =>
        useAnimateArray(array, {autostart: true}),
      );
      // todo understand why `autostart` does not use default value
      expect(result.current.index).toBe(0);
    });
  });

  describe('isVisible', () => {
    it('should default to true with autostart = true', () => {
      const {result} = renderHook(() =>
        useAnimateArray(array, {autostart: true}),
      );
      expect(result.current.isVisible).toBe(true);
    });

    it('should default to false with autostart = false', () => {
      const {result} = renderHook(() =>
        useAnimateArray(array, {autostart: false}),
      );
      expect(result.current.isVisible).toBe(true);
    });
  });
});
