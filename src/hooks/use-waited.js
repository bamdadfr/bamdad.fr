import { useState, useEffect } from 'react'

/**
 * @description wait before rendering component
 * @param {number} [delay=0] fixed delay using setTimeout()
 * @returns {{boolean}} return [true] when delay is over
 */
export function useWaited (delay = 0) {

    const [waited, setWaited] = useState (false)

    useEffect (() => {

        setTimeout (() => {

            setWaited (true)

        }, delay)

    }, [])

    return [waited]

}