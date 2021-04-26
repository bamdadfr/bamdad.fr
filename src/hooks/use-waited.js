import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

/**
 * @function
 * @name useWaited
 * @description wait before rendering component
 * @param {Number} delay - fixed delay using setTimeout()
 * @return {Array.<Boolean>} return [true] when delay is over
 */
export function useWaited (delay = useWaited.defaultProps.delay) {

    const [waited, setWaited] = useState (false)

    useEffect (() => {

        setTimeout (() => {

            setWaited (true)

        }, delay)

    }, [])

    return [waited]

}

useWaited.defaultProps = {
    'delay': 0,
}

useWaited.propTypes = {
    'delay': PropTypes.number.isRequired,
}