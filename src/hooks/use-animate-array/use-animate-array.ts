import {useCallback, useEffect, useState} from 'react';

interface options {
  autostart?: boolean;
}

/**
 * Hook to iterate over an array and animate each item
 */
export function useAnimateArray(array: unknown[], {autostart = true}: options) {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const [keyframes] = useState({show: 0, iterate: 1200, hide: 2400});

  const nextIndex = useCallback(() => {
    if (typeof array[index + 1] === 'undefined') {
      return setIndex(0);
    }
    return setIndex(index + 1);
  }, [array, index]);

  useEffect(() => {
    if (!autostart) {
      return;
    }

    new Promise((resolve) => {
      setTimeout(() => {
        setIsVisible(false);
        resolve(undefined);
      }, keyframes.hide);
    })
      .then(
        () =>
          new Promise((resolve) => {
            setTimeout(() => {
              nextIndex();
              resolve(undefined);
            }, keyframes.iterate);
          }),
      )
      .then(
        () =>
          new Promise((resolve) => {
            setTimeout(() => {
              setIsVisible(true);
              resolve(undefined);
            }, keyframes.show);
          }),
      );
  }, [
    index,
    keyframes.hide,
    keyframes.iterate,
    keyframes.show,
    nextIndex,
    autostart,
  ]);

  return {
    index,
    isVisible,
  };
}
