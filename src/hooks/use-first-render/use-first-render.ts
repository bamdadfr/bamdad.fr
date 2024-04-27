import {useEffect, useState} from 'react';

/**
 * Hook to determine if the component has been rendered for the first time
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
