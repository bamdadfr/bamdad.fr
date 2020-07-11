import type { ReactElement } from 'react'

export interface IAnimationTextProps {
    payload: string|ReactElement,
    show: boolean
    delay: number
    overflow?: true
    centered?: true
    link?: string
    ariaLabel?: string
    hover?: string
}

// TODO: UseTransitionResult<TItem, DS extends object>
// https://github.com/react-spring/react-spring/blob/master/types/web.d.ts#L210
export type IAnimationTextRenderProps = object
