import React from 'react'
import type { ReactElement } from 'react'
import { Crisp } from './crisp'
import { Columns } from './columns'
import { Contact } from './contact'
import { Footer } from './footer'

export const App = (): ReactElement => {

    React.useEffect (() => {

        Crisp ()
    
    }, [])

    return (
        <>
            <section className="hero is-fullheight is-unselectable">

                <div className="hero-head" />

                <Columns />

                <Contact />

                <Footer />

            </section>
        </>
    )

}

