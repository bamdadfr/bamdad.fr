import {useRouter} from 'next/router';
import React, {useEffect} from 'react';

/**
 * 404 page
 * Path: /404 and any other path that doesn't match
 *
 * @returns {React.ReactElement} - 404 page
 */
export default function NotFoundPage() {
  const router = useRouter();

  useEffect(() => {
    (async () => {
      await router.replace('/');
    })();
  }, [router]);

  return <></>;
}
