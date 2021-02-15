import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma/css/bulma.min.css'
import { Global } from './styles/global'
import { Layout } from './layout/layout'

const Root = () => (
    <>
        <Global/>
        <Layout/>
    </>
)

ReactDOM.render (
    <Root/>,
    document.getElementById ('root'),
)
