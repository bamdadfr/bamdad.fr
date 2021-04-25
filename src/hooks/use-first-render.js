import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

/**
 * @function useFirstRender
 * @description use this hook when rendering a component with delay to know if component has already been rendered or not
 * @param {number} delay - parent component's rendering delay
 * @return {boolean} firstRender
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

useFirstRender.propTypes = {
    'delay': PropTypes.number.isRequired,
}