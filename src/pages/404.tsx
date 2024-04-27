import {useRouter} from 'next/router';
import React, {useEffect} from 'react';

/**
 * 404 page
 * Path: /404 and any other path that doesn't match
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
