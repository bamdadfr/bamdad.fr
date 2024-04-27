import {
  useGoogleAnalytics,
} from 'src/app/hooks/use-google-analytics/use-google-analytics';

/**
 * Entry hook to use Next.js app
 */
export function useApp() {
  useGoogleAnalytics();
}
