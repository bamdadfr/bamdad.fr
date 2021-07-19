import { useState, useEffect } from 'react'

/**
 * @description render a component only once
 * @param {number} [delay=0] rendering delay
 * @typedef {boolean} FirstRender will return `false` after first render
 * @returns {FirstRender[]} state
 */
export function useFirstRender (delay = 0) {

    const [firstRender, setFirstRender] = useState (true)

    useEffect (() => {

        const timer = setTimeout (() => {

            setFirstRender (false)

        }, delay)

        return () => clearTimeout (timer)

    }, [])

    return [firstRender]

}