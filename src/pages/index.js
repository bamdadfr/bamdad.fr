import React from 'react'
import { Helmet } from 'react-helmet'
import { MetaData } from '@/data/meta.data'

/**
 * @function
 * @description page: index
 * @returns {React.ReactNode} - react component
 */
export default function Index () {

    return (
        <>
            <Helmet
                title="Bamdad Sabbagh"
                meta={[
                    ...MetaData,
                    {
                        'property': 'og:description',
                        'content': 'Web Developer',
                    },
                ]}
            />
        </>
    )

}