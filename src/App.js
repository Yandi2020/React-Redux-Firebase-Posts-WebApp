import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './01-components/layout /Navbar'
import Dashboard from './01-components/dashboard/Dashboard'

import ProjectDetails from './01-components/projects/ProjectDetails'
import SignIn from './01-components/auth/SignIn'
import SignUp from './01-components/auth/SignUp'
import CreateProject from './01-components/projects/CreateProject'

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Switch>
            <Route exact path='/' component={ Dashboard } />
            <Route path='/project/:id' component={ ProjectDetails } />
            <Route path='/signin' component={ SignIn } />
            <Route path='/signup' component={ SignUp } />
            <Route path='/create' component={ CreateProject } />
          </Switch>

        </div>
      </BrowserRouter>
    )
  }
}

export default App;
