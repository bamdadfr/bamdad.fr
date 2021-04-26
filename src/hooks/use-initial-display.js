import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

/**
 * @function
 * @name useInitialDisplay
 * @description wait for a fixed delay before rendering component
 * @param {Number} initialDelay
 * @return {Array.<Boolean>}
 */
export function useInitialDisplay (initialDelay) {

    const [initialDisplay, setInitialDisplay] = useState (false)

    useEffect (() => {

        setTimeout (() => {

            setInitialDisplay (true)

        }, initialDelay)

    }, [])

    return [initialDisplay]

}

useInitialDisplay.propTypes = {
    'initialDelay': PropTypes.number.isRequired,
}