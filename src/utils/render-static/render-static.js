import createEmotionServer from '@emotion/server/create-instance';
import {cache} from '@emotion/css';

/**
 * Render static styles
 *
 * @param {string} html - Stringified HTML
 * @returns {object} - Object with `css` and `ids` keys
 */
export async function renderStatic(html) {
  if (html === undefined) {
    throw new Error('did you forget to return html from renderToString?');
  }
  const {extractCritical} = createEmotionServer(cache);
  const {ids, css} = extractCritical(html);

  return {html, ids, css};
}
