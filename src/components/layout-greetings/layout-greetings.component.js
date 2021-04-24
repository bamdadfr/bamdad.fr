import React from 'react'
import AnimationSlideComponent from '@/components/animation-slide/animation-slide.component'
import { GreetingsData } from '@/data/greetings.data'

export default function LayoutGreetingsComponent () {

    return (
        <>
            {
                GreetingsData.map (
                    (element) => (
                        <AnimationSlideComponent key={element.delay} delay={element.delay}>
                            <div>
                                {element.text}
                            </div>
                        </AnimationSlideComponent>
                    ),
                )
            }
        </>
    )

}