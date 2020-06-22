import React, { ReactElement } from 'react'
// components
import crispChatbot from './crisp-chatbot'
import Columns from './template/columns'
import Contact from './template/contact'
import Footer from './template/footer'

export default function App (): ReactElement {

    React.useEffect (() => {

        crispChatbot ()
    
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

