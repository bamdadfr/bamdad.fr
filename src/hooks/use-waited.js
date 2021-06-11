import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    'delay': PropTypes.number.isRequired,
}

const defaultProps = {
    'delay': 0,
}

/**
 * @function
 * @name useWaited
 * @description wait before rendering component
 * @param {Number} [delay=0] - fixed delay using setTimeout()
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

useWaited.propTypes = propTypes

useWaited.defaultProps = defaultProps