import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import HomeRoute from './routes/HomeRoute'

require('../styles/global.css')

const App = () => {
    return (
        <Router history={hashHistory}>
            <Route path="/" component={HomeRoute} />
        </Router>
    )
}

render(<App />, document.getElementById('app'))
