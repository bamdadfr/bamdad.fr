import { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { LanguagesData } from '@/data/languages.data'

/**
 * @function
 * @name useIterateLanguages
 * @description wait for the delay before first rendering then iterate array indexes one by one
 * @param {Number} languagesLength
 * @param {Boolean} initialDisplay
 * @return {Array.<Object.<Number, Boolean>>}
 */
export function useIterateLanguages (languagesLength, initialDisplay) {

    const [index, setIndex] = useState (0)
    const [isVisible, setIsVisible] = useState (true)

    const [keyframes] = useState ({
        'show': 0,
        'iterate': 1200,
        'hide': 2400,
    })

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