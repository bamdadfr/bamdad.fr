import React from 'react'
import { DefaultLayout } from '../layouts'
import { GreetingsComponent, LanguagesComponent } from '../components'

/**
 * @returns {React.ReactElement} react component
 */
export default function Index () {

    return (
        <>
            <DefaultLayout>
                <div>
                    <GreetingsComponent/>
                </div>
                <div>
                    <LanguagesComponent/>
                </div>
            </DefaultLayout>
        </>
    )

}