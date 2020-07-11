import type { ReactElement } from 'react'

export interface IArrayElement {
    name: string,
    color: string,
    icon: ReactElement,
}

export type IArrayData = IArrayElement[]

export interface IRendererProps {
    items: IArrayData,
}

export interface IControllerProps {
    delay: number,
}