import React, { useState } from 'react'
import { Button, Heading, TextInputField, Pane } from 'evergreen-ui'
import Container from '../../components/Container'

const initialState = {
  firstname: '',
  surname: '',
  email: '',
  password: ''
}

const CreateUser = () => {
  const [state, setState] = useState(initialState)
  const handleOnChange = e => {
    const {
      target: { name, value }
    } = e
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }
  return (
    <Container background="tint1" minHeight="100vh" flexDirection="column">
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
        <Button type="submit" onClick={() => alert(JSON.stringify(state))}>Submit</Button>
      </Pane>
    </Container>
  )
}

export default CreateUser
