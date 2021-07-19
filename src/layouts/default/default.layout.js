import React from 'react'
import { BackgroundComponent, FooterComponent, GreetingsComponent, LanguagesComponent, ContactComponent, MetaComponent } from '../../components'
import { Container, TopSection } from './default.layout.styles'

/**
 * @returns {React.ReactElement} react component
 */
export function DefaultLayout () {

    return (
        <>
            <MetaComponent/>
            <BackgroundComponent/>

            <Container>

                <TopSection>
                    <div>
                        <GreetingsComponent/>
                    </div>
                    <div>
                        <LanguagesComponent/>
                    </div>
                </TopSection>

                <ContactComponent/>

            </Container>

            <FooterComponent/>
        </>
    )

}