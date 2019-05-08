import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Heading, TextInputField, Pane } from 'evergreen-ui'
import Container from '../../components/Container'
import { withCreateUser } from '../../graphql'

const initialState = {
  firstname: '',
  surname: '',
  email: '',
  password: ''
}

const CreateUser = ({ mutate }) => {
  const [state, setState] = useState(initialState)

  const handleOnChange = ({ target: { name, value } }) => {
    setState(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleOnSubmit = e => {
    e.preventDefault()
    const isValid = Object.values(state).every(value => value)
    if (isValid) {
      mutate({ variables: { ...state } })
      console.log(state)
    }
  }

  return (
    <Container data-testid="container" background="tint1" minHeight="100vh" flexDirection="column">
      <form onSubmit={handleOnSubmit}>
        <Heading size={600} marginBottom={35}>
          Create an User
        </Heading>
        <Pane display="flex" justifyContent="space-between" width={500}>
          <Pane width="48%" marginBottom={25}>
            <TextInputField
              label="Firstname"
              name="firstname"
              placeholder="Firstname"
              onChange={handleOnChange}
              value={state.firstname}
            />
            <TextInputField
              label="Email Address"
              type="email"
              name="email"
              placeholder="Email address"
              onChange={handleOnChange}
              value={state.email}
            />
          </Pane>
          <Pane width="48%" marginBottom={25}>
            <TextInputField
              label="Surname"
              name="surname"
              placeholder="Surname"
              onChange={handleOnChange}
              value={state.surname}
            />
            <TextInputField
              label="Password"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleOnChange}
              value={state.password}
            />
          </Pane>
        </Pane>
        <Pane width={500} marginBottom={25} textAlign="right">
          <Button type="submit">Submit</Button>
        </Pane>
      </form>
    </Container>
  )
}

CreateUser.propTypes = {
  mutate: PropTypes.func.isRequired
}

export default withCreateUser(CreateUser)
