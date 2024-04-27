import {cache} from '@emotion/css';
import createEmotionServer from '@emotion/server/create-instance';

/**
 * Render static styles
 */
export function renderStatic(html?: string) {
  if (typeof html === 'undefined') {
    throw new Error('did you forget to return html from renderToString?');
  }

  const {extractCritical} = createEmotionServer(cache);
  const {ids, css} = extractCritical(html);

  return {
    html,
    ids,
    css,
  };
}
