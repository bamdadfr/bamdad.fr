import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

/**
 * @returns {React.ReactElement} react component
 */
export default function NotFoundPage () {

    const router = useRouter ()

    useEffect (() => {

        (async () => {

            await router.replace ('/')

        }) ()

    }, [router])

    return <></>

}