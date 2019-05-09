import React, { useState } from 'react'
import { ROUTES } from '../../constants'
import Container from '../../components/Container'
import { Card, Heading, Button, TextInputField } from 'evergreen-ui'
import { navigate } from '@reach/router'

const Login = () => {
  const initialState = {
    email: '',
    password: ''
  }

  const [state, setState] = useState(initialState)

  const handleOnChange = ({ target: { name, value } }) => {
    setState(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleOnSubmit = e => {
    e.preventDefault()
    if (Object.values(state).every(value => value)) {
      navigate(ROUTES.createUser)
      console.log(state)
    }
  }

  return (
    <Container>
      <Card elevation={1} background="white" padding={24} width="35%">
        <Heading data-testid="heading" size={600} marginBottom={35}>
          Sign In
        </Heading>
        <form onSubmit={handleOnSubmit}>
          <TextInputField
            label="Email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleOnChange}
            value={state.email}
          />
          <TextInputField
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleOnChange}
            value={state.password}
          />
          <Button type="submit" appearance="primary" disabled={!Object.values(state).every(value => value)}>Submit</Button>
        </form>
      </Card>
    </Container>
  )
}

export default Login
