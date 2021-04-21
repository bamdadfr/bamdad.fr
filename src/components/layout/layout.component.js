import React from 'react'
import Head from 'next/head'
import LayoutBackgroundComponent from '@/components/layout-background/layout-background.component'
import LayoutFooterComponent from '@/components/layout-footer/layout-footer.component'
import LayoutMainComponent from '@/components/layout-main/layout-main.component'
import LayoutGreetingsComponent from '@/components/layout-greetings/layout-greetings.component'
import LayoutLanguagesComponent from '@/components/layout-languages/layout-languages.component'
import LayoutContactComponent from '@/components/layout-contact/layout-contact.component'
import LayoutTopComponent from '@/components/layout-top/layout-top.component'

/**
 * Layout includes nested sub-areas:
 * - Background
 * - Main
 *   - Top (screen's first half)
 *     - Greetings (left side)
 *     - Languages (right side)
 *   - Contact (screen's second half)
 * - Footer
 */
export default function LayoutComponent () {

    return (
        <>
            <Head>
                <title>
                    Bamdad Sabbagh
                </title>
            </Head>
            <LayoutBackgroundComponent/>
            <LayoutMainComponent>
                <LayoutTopComponent>
                    <LayoutGreetingsComponent/>
                    <LayoutLanguagesComponent/>
                </LayoutTopComponent>
                <LayoutContactComponent/>
            </LayoutMainComponent>
            <LayoutFooterComponent/>
        </>
    )

}