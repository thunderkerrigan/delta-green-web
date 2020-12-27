// /* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './index.scss'
import Header from '../Header'

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                {/* <Route exact path='/' component={SearchResultsContainer} /> */}
                {/* <Route path='/hero/:id' component={SuperHeroPage} /> */}
            </Switch>
        </Router>
    )
}

export default App
