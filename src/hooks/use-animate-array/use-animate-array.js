import {useState, useEffect, useCallback} from 'react';

/**
 * Hook to iterate over an array and animate each item
 *
 * @param {Array.<*>} array - The array to iterate over
 * @param {object} options - The options to use
 * @param {boolean} [options.autostart=true] - Whether to start the animation automatically
 * @returns {Array.<{index: number, isVisible: boolean}>} - The array of items
 */
export function useAnimateArray(
  array,
  {
    autostart = true,
  },
) {
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
        resolve();
      }, keyframes.hide);
    })
      .then(() => new Promise((resolve) => {
        setTimeout(() => {
          nextIndex();
          resolve();
        }, keyframes.iterate);
      }))
      .then(() => new Promise(
        (resolve) => {
          setTimeout(() => {
            setIsVisible(true);
            resolve();
          }, keyframes.show);
        }));
  }, [index, keyframes.hide, keyframes.iterate, keyframes.show, nextIndex, autostart]);

  return {
    index,
    isVisible,
  };
}
