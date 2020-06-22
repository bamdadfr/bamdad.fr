import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './config/serviceWorker'
import 'bulma/css/bulma.min.css'
import GlobalStyle from './config/style'
import App from './components/app'

const Root = (): React.ReactElement => (
    <>
        <GlobalStyle />
        <App />
    </>
)

ReactDOM.render (
    <Root />,
    document.getElementById ('root'),
)

serviceWorker.register ()
