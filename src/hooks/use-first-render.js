import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    'delay': PropTypes.number,
}

const defaultProps = {
    'delay': 0,
}

/**
 * @function
 * @name useFirstRender
 * @description use this hook when rendering a component with delay to know if component has already been rendered or not
 * @param {number} [delay=0] - parent component's rendering delay
 * @returns {{Boolean}} - state
 */
export function useFirstRender (delay = useFirstRender.defaultProps.delay) {

    const [firstRender, setFirstRender] = useState (true)

    useEffect (() => {

        const timer = setTimeout (() => {

            setFirstRender (false)

        }, delay)

        return () => clearTimeout (timer)

    }, [])

    return [firstRender]

}

useFirstRender.propTypes = propTypes

useFirstRender.defaultProps = defaultProps