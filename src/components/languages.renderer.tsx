import React from 'react'
import styled from 'styled-components'
import { AnimationFade } from './animation.fade'
import { AnimationText } from './animation.text'
import { IRendererProps } from './languages.types'

export const LanguagesRenderer = (props: IRendererProps): React.ReactElement => {

    const {
        items,
    } = props

    const [index, setIndex] = React.useState (0)
    const [show, setShow] = React.useState (true)

    React.useEffect (() => {

        const getIndex = (): number => {

            if (index + 1 < items.length) {

                return index + 1
            
            }

            return 0
        
        }

        new Promise ((resolve): void => {

            setTimeout (() => {

                // Wait X seconds then hide
                setShow (false)

                resolve ()
            
            }, 2400) // 3800
        
        })
            .then (() => new Promise ((resolve): void => {

                // wait the shown icon to disappear to change index
                setTimeout (() => {

                    setIndex (getIndex)

                    resolve ()
                
                }, 1200) // 1900
            
            }))
            .then (() => new Promise ((resolve): void => {

                // wait between two icons
                setTimeout (() => {

                    setShow (true)

                    resolve ()
                
                }, 0) // 500
            
            }))
    
    }, [index, items.length])

    return (
        <>

            {items[index].icon !== null
                ? (
                    <Icon className="is-size-1-tablet is-size-2-mobile" style={{ 'color': items[index].color }}>
                        <AnimationFade
                            payload={items[index].icon}
                            show={show}
                            delay={350} // 350
                        />
                    </Icon>
                ) : null}

            <Text className="is-size-6-desktop is-size-6-mobile">
                <AnimationText
                    payload={items[index].name}
                    show={show}
                    delay={0}
                />
            </Text>

        </>
    )

}

const Icon = styled.div`
    /* border: 1px dashed red; */

    padding-left: 30px;
    margin-bottom: -0.3em;
`

const Text = styled.div`
    /* border: 1px dashed red; */

    min-height: 1px;
    margin-bottom: -6px;
    font-weight: 800;
`
