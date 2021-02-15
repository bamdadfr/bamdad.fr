import React, { useEffect, useState } from 'react'
import { LanguagesRenderer } from '../components/languages-renderer'
import { LanguagesData } from '../components/languages-data'

export const LayoutLanguages = (props) => {

    const { delay } = props
    const [isLoaded, setIsLoaded] = useState (false)
    const [data, setData] = useState ([])

    const shuffle = (array) => {

        let currentIndex = array.length
        let temporaryValue = null
        let randomIndex = null

        // While there remain elements to shuffle...
        while (currentIndex !== 0) {

            // Pick a remaining element...
            randomIndex = Math.floor (Math.random () * currentIndex)

            currentIndex -= 1

            // And swap it with the current element.
            temporaryValue = array[currentIndex]

            array[currentIndex] = array[randomIndex]

            array[randomIndex] = temporaryValue

        }

        return array

    }

    useEffect (() => {

        const buildData = (array) => {

            array.forEach (
                (e) => {

                    const r = {
                        'name': e.name,
                        'color': e.color,
                        'icon': e.icon,
                    }

                    setData (oldData => [
                        ...oldData,
                        r,
                    ])

                },
            )

            return true

        }

        buildData (shuffle (LanguagesData))

        new Promise ((resolve) => {

            setTimeout (() => {

                // 'delay' prop for rendering
                setIsLoaded (true)

                resolve ()

            }, delay)

        }).then (null)

    }, [delay])

    if (!isLoaded) {

        return (
            <></>
        )

    }

    return (
        <>
            <LanguagesRenderer items={data}/>
        </>
    )

}
