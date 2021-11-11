import { useGoogleAnalytics } from '../use-google-analytics/use-google-analytics';

/**
 * Entry hook to use Next.js app
 */
export function useApp () {
  useGoogleAnalytics ();
}
