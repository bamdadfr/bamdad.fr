import React from 'react'
import { Crisp } from '../components/crisp'
import { LayoutColumns } from './layout-columns'
import { LayoutContact } from './layout-contact'
import { LayoutFooter } from './layout-footer'

export const Layout = () => {

    React.useEffect (() => {

        Crisp ()

    }, [])

    return (
        <>
            <section className="hero is-fullheight is-unselectable">

                <div className="hero-head"/>

                <LayoutColumns/>

                <LayoutContact/>

                <LayoutFooter/>

            </section>
        </>
    )

}

