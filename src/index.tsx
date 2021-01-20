import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma/css/bulma.min.css'
import { AppStyle } from './components/app.style'
import { App } from './components/app'

const Root = (): React.ReactElement => (
    <>
        <AppStyle />
        <App />
    </>
)

ReactDOM.render (
    <Root />,
    document.getElementById ('root'),
)
