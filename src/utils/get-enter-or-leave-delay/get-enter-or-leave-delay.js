/**
 * @param {number} delay delay
 * @param {boolean} isFirstRender `true` if component has never rendered
 * @param {boolean} isLeaving `true` if component is unmounted
 * @returns {number} delay
 */
export function getEnterOrLeaveDelay (delay, isFirstRender, isLeaving) {

    if (isFirstRender) return delay

    if (isLeaving) return 400 // static leaving delay

    return 0

}