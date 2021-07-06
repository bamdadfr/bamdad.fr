import { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    'array': PropTypes.arrayOf (PropTypes.any).isRequired,
    'start': PropTypes.bool.isRequired,
}

const defaultProps = {
    'start': true,
}

/**
 * @function
 * @name useAnimateArray
 * @description animate array
 * @param {Array.<*>} array - input array
 * @param {*} props - react hook props
 * @param {boolean} [props.start=true] - used to manually trigger the start (useful for delayed render)
 * @returns {Array.<{index: number, isVisible: boolean}>} - state
 */
export function useAnimateArray (
    array,
    {
        start = useAnimateArray.defaultProps.start,
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

useAnimateArray.propTypes = propTypes

useAnimateArray.defaultProps = defaultProps