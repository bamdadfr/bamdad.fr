import {useState, useEffect} from 'react';

/**
 * Hook to determine if the component has been rendered for the first time
 *
 * @param {number} [delay=0] - Delay in milliseconds before the first render
 * @typedef {boolean} FirstRender - True if the component has been rendered for the first time
 * @returns {{FirstRender}} - FirstRender
 */
export function useFirstRender(delay = 0) {
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFirstRender(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return {firstRender};
}
