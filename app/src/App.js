import React from 'react'
import CreateUser from './screens/createuser'
import Login from './screens/login'
import { Router } from '@reach/router'
import { ApolloProvider } from 'react-apollo'
import { ROUTES } from './constants'
import { client } from './graphql'

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Login path={ROUTES.home} />
      <CreateUser path={ROUTES.createUser} />
    </Router>
  </ApolloProvider>
)

export default App
