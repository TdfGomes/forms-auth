import React from 'react'
import { Link } from '@reach/router'
import { ROUTES } from '../../constants'

const Login = () => (
  <Link to={ROUTES.createUser}>
    <h1>LOGON</h1>
  </Link>
)

export default Login
