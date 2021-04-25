import React from 'react'
import './App.css'
import Addtodo from './Addtodo'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Todo from './Todo'
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Todo} />
        <Route exact path="/addtodo" component={Addtodo} />
      </Switch>
    </Router>
  )
}

export default App