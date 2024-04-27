/**
 * Get the enter or leave delay, depends on rendering is initial or update
 */
export function getEnterOrLeaveDelay(
  baseDelay: number,
  isFirstRender: boolean,
  isLeaving: boolean,
) {
  if (isFirstRender) {
    return baseDelay;
  }

  if (isLeaving) {
    return 400;
  } // static leaving delay

  return 0;
}
