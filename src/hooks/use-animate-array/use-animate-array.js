import { useState, useEffect, useCallback } from 'react'

/**
 * @description iterate an array item by item
 * @param {Array.<*>} array array to iterate through
 * @param {object} options hook options
 * @param {boolean} [options.start=true] trigger render manually / externally
 *      (useful for delayed render)
 * @returns {Array.<{index: number, isVisible: boolean}>} state
 */
export function useAnimateArray (
    array,
    {
        start = true,
    },
) {

    const [index, setIndex] = useState (0)
    const [isVisible, setIsVisible] = useState (true)

    const [keyframes] = useState ({
        'show': 0,
        'iterate': 1200,
        'hide': 2400,
    })

    const nextIndex = useCallback (() => {

        if (typeof array[index + 1] === 'undefined') {

            return setIndex (0)

        }

        return setIndex (index + 1)

    }, [index])

    useEffect (() => {

        if (start) {

            new Promise ((resolve) => {

                setTimeout (() => {

                    setIsVisible (false)

                    resolve ()

                }, keyframes.hide)

            })
                .then (() => new Promise ((resolve) => {

                    setTimeout (() => {

                        nextIndex ()

                        resolve ()

                    }, keyframes.iterate)

                }))
                .then (() => new Promise (
                    (resolve) => {

                        setTimeout (() => {

                            setIsVisible (true)

                            resolve ()

                        }, keyframes.show)

                    }))

        }

    }, [index, start])

    return [{
        index,
        isVisible,
    }]

}