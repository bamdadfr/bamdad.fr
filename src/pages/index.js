import React from 'react'
import { DefaultLayout } from '../layouts/default/default.layout'
import { GreetingsComponent } from '../components/greetings/greetings.component'
import { LanguagesComponent } from '../components/languages/languages.component'

/**
 * @returns {React.ReactElement} react component
 */
export default function IndexPage () {

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