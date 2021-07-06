import React from 'react'
import LayoutBackgroundComponent from '@/components/layout-background/layout-background.component'
import LayoutFooterComponent from '@/components/layout-footer/layout-footer.component'
import LayoutMainComponent from '@/components/layout-main/layout-main.component'
import LayoutGreetingsComponent from '@/components/layout-greetings/layout-greetings.component'
import LayoutLanguagesComponent from '@/components/layout-languages/layout-languages.component'
import LayoutContactComponent from '@/components/layout-contact/layout-contact.component'
import LayoutTopComponent from '@/components/layout-top/layout-top.component'
import LayoutHeadComponent from '@/components/layout-head/layout-head.component'

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

/**
 * @function
 * @name LayoutComponent
 * @description Entry point for page layout
 * @returns {React.ReactNode} - react component
 */
export default function LayoutComponent () {

    return (
        <>
            <LayoutHeadComponent/>
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