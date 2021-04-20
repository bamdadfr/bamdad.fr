import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma/css/bulma.min.css'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import { GlobalStyles } from './styles/global.styles'
import { Layout } from './layout/layout'

Sentry.init ({
    'dsn': 'https://f6bef7f290624f099ca028df7f2e8548@o574972.ingest.sentry.io/5727899',
    'integrations': [new Integrations.BrowserTracing ()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    'tracesSampleRate': 1.0,
})

const Root = () => (
    <>
        <GlobalStyles/>
        <Layout/>
    </>
)

ReactDOM.render (
    <Root/>,
    document.getElementById ('root'),
)
