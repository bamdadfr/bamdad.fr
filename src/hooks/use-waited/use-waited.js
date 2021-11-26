import {useState, useEffect} from 'react';

/**
 * Hook to check if we waited enough time to perform an action
 *
 * @param {number} [delay=0] - Delay in ms
 * @returns {{boolean}} - True if waited enough time
 */
export function useWaited(delay = 0) {
  const [waited, setWaited] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setWaited(true);
    }, delay);
  }, [delay]);

  return {waited};
}
