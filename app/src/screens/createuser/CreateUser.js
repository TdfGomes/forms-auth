import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Heading } from 'evergreen-ui'
import Container from '../../components/Container'
import CreateUserForm from './CreateUserForm'
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
    <Container flexDirection="column">
      <Fragment>
        <Heading size={600} marginBottom={35}>
          Create an User
        </Heading>
        <CreateUserForm inputValues={state} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} />
      </Fragment>
    </Container>
  )
}

CreateUser.propTypes = {
  mutate: PropTypes.func.isRequired
}

export default withCreateUser(CreateUser)
