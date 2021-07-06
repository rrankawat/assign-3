import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import AllIssuesPage from './pages/AllIssuesPage'
import About from './pages/About'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={AllIssuesPage} />
        <Route exact path='/issues' component={AllIssuesPage} />
        <Route exact path='/about' component={About} />
      </Switch>
    </Router>
  )
}

export default App
