import React from 'react'
import PropTypes from 'prop-types'
import { Button, TextInputField, Pane } from 'evergreen-ui'

const CreateUserForm = ({ handleOnSubmit, handleOnChange, inputValues }) => (
  <form onSubmit={handleOnSubmit} data-testid="form" >
    <Pane display="flex" justifyContent="space-between" width={500}>
      <Pane width="48%" marginBottom={25}>
        <TextInputField
          label="Firstname"
          name="firstname"
          placeholder="Firstname"
          onChange={handleOnChange}
          value={inputValues.firstname}
        />
        <TextInputField
          label="Email Address"
          type="email"
          name="email"
          placeholder="Email address"
          onChange={handleOnChange}
          value={inputValues.email}
        />
      </Pane>
      <Pane width="48%" marginBottom={25}>
        <TextInputField
          label="Surname"
          name="surname"
          placeholder="Surname"
          onChange={handleOnChange}
          value={inputValues.surname}
        />
        <TextInputField
          label="Password"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleOnChange}
          value={inputValues.password}
        />
      </Pane>
    </Pane>
    <Pane width={500} marginBottom={25} textAlign="right">
      <Button type="submit" role="submit">Submit</Button>
    </Pane>
  </form>
)

CreateUserForm.propTypes = {
  inputValues: PropTypes.shape({
    firstname: PropTypes.string,
    surname: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string
  }).isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired
}

export default CreateUserForm
