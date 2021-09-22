import React from 'react'
import './app.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Projects from './Components/Projects/Projects'
import Contect from './Components/Contect/Contect'
import About from './Components/About/About'
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/contectus' component={Contect} />
          <Route exact path='/aboutme' component={About} />
        </Switch>
      </Router>
    </>
  )
}

export default App
