import React from 'react'
import { StyledBold } from '@/data/greetings.styles'

/**
 * @name GreetingsData
 * @description data feeding the `greetings` component
 * @type {Array.<Object.<String, (String, Number)>>}
 */
export const GreetingsData = [
    {
        'text': 'Hi 👋🏽,',
        'delay': 0,
    },
    {
        'text': (
            <>
                my name is <StyledBold>Bamdad</StyledBold>.
            </>
        ),
        'delay': 1000,
    },
    {
        'text': 'I am',
        'delay': 2600,
    },
    {
        'text': (
            <>
                a <StyledBold>Full Stack</StyledBold> developer
            </>
        ),
        'delay': 3000,
    },
    {
        'text': 'shifting towards',
        'delay': 4500,
    },
    {
        'text': (
            <>
                <StyledBold>Front End</StyledBold>.
            </>
        ),
        'delay': 5500,
    },
]