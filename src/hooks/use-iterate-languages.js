import { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { LanguagesData } from '@/data/languages.data'

export function useIterateLanguages (languagesLength, initialDisplay) {

    const [index, setIndex] = useState (0)
    const [isVisible, setIsVisible] = useState (true)

    const nextIndex = useCallback (() => {

        if (typeof LanguagesData[index + 1] === 'undefined') {

            return setIndex (0)

        }

        return setIndex (index + 1)

    }, [index])

    useEffect (() => {

        if (initialDisplay) {

            new Promise ((resolve) => {

                setTimeout (() => {

                    setIsVisible (false)

                    resolve ()

                }, 2400)

            })
                .then (() => new Promise ((resolve) => {

                    setTimeout (() => {

                        nextIndex ()

                        resolve ()

                    }, 1200)

                }))
                .then (() => new Promise (
                    (resolve) => {

                        setTimeout (() => {

                            setIsVisible (true)

                            resolve ()

                        }, 0)

                    }))

        }

    }, [index, languagesLength, initialDisplay])

    return [{
        index,
        isVisible,
    }]

}

useIterateLanguages.propTypes = {
    'languagesLength': PropTypes.number.isRequired,
    'initialDisplay': PropTypes.bool.isRequired,
}