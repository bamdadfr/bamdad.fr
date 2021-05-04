import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

/**
 * @function
 * @name useFirstRender
 * @description use this hook when rendering a component with delay to know if component has already been rendered or not
 * @param {Number} delay - parent component's rendering delay
 * @return {Array.<Boolean>}
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

useFirstRender.defaultProps = {
    'delay': 0,
}

useFirstRender.propTypes = {
    'delay': PropTypes.number,
}