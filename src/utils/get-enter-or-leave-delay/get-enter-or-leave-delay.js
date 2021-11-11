/**
 * Get the enter or leave delay, depending if rendering is initial or update
 *
 * @param {number} delay - The base delay
 * @param {boolean} isFirstRender - If it is the first render
 * @param {boolean} isLeaving - If the element is leaving
 * @returns {number} - The final delay
 */
export function getEnterOrLeaveDelay (delay, isFirstRender, isLeaving) {
  if (isFirstRender) {
    return delay;
  }

  if (isLeaving) {
    return 400;
  } // static leaving delay

  return 0;
}
