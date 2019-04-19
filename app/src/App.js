import React from 'react'
import CreateUser from './screens/createuser'
import Login from './screens/login'
import { Router } from '@reach/router'
import { ROUTES } from './constants'

const App = () => (
  <Router>
    <Login path={ROUTES.home} />
    <CreateUser path={ROUTES.createUser} />
  </Router>
)

export default App
