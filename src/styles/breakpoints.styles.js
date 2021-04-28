import { BreakpointsConstants } from './breakpoints.constants'

/**
 * @name BreakpointsStyles
 * @description breakpoints styles as string to use in media queries
 * @type {Object.<String, String>}
 */
export const BreakpointsStyles = {
    'mobile': `(max-width: ${BreakpointsConstants.mobile}px)`,
    'tablet': `(min-width: ${BreakpointsConstants.tablet}px)`,
    'desktop': `(min-width: ${BreakpointsConstants.desktop}px)`,
    'widescreen': `(min-width: ${BreakpointsConstants.widescreen}px)`,
    'fullhd': `(min-width: ${BreakpointsConstants.fullhd}px)`,
}