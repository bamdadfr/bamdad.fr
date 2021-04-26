import { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { LanguagesData } from '@/data/languages.data'
import { useIterateLanguagesConstants } from '@/hooks/use-iterate-languages.constants'

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

                }, useIterateLanguagesConstants.hide)

            })
                .then (() => new Promise ((resolve) => {

                    setTimeout (() => {

                        nextIndex ()

                        resolve ()

                    }, useIterateLanguagesConstants.iterate)

                }))
                .then (() => new Promise (
                    (resolve) => {

                        setTimeout (() => {

                            setIsVisible (true)

                            resolve ()

                        }, useIterateLanguagesConstants.show)

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