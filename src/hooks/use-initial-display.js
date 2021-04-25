import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

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