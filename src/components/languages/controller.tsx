import React from 'react'
import Renderer from './renderer'
import Data from './data'
import { IControllerProps, IArrayElement, IArrayData } from './types'

export default function (props: IControllerProps): React.ReactElement {

    const {
        delay,
    } = props

    const [isLoaded, setIsLoaded] = React.useState (false)
    const [data, setData] = React.useState<Array<any>> ([])

    const shuffle = (array: IArrayData): IArrayData => {

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

    React.useEffect (() => {

        const buildData = (array: IArrayData): true => {

            array.forEach (
                (e: IArrayElement): void => {

                    const r: object = {
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

        buildData (shuffle (Data))

        new Promise ((resolve): void => {

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
            <Renderer items={data} />  
        </>
    )

}
