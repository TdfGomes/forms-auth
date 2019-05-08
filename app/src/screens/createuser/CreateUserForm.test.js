/* eslint-disable no-undef */
import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import CreateUserForm from './CreateUserForm'

describe('<CreateUserForm/>', () => {
  const props = {
    inputValues: {
      firstname: '',
      surname: '',
      email: '',
      password: ''
    },
    handleOnSubmit: jest.fn(),
    handleOnChange: jest.fn()
  }
  const mockedData = {
    firstname: 'Tiago',
    surname: 'Gomes',
    email: 'tiago@appliedblockchain.com',
    password: 'supersstrongpass1234'
  }

  it('inputs should change value', () => {
    const { getByPlaceholderText, rerender } = render(<CreateUserForm {...props} />)

    const firstname = getByPlaceholderText('Firstname')
    const surname = getByPlaceholderText('Surname')
    const email = getByPlaceholderText('Email address')
    const password = getByPlaceholderText('Password')

    fireEvent.change(firstname, { target: { value: 'Tiago' } })
    fireEvent.change(surname, { target: { value: 'Gomes' } })
    fireEvent.change(email, { target: { value: 'tiago@appliedblockchain.com' } })
    fireEvent.change(password, { target: { value: 'supersstrongpass1234' } })

    expect(props.handleOnChange).toHaveBeenCalled()

    rerender(<CreateUserForm handleOnChange={props.handleOnChange} handleOnSubmit={props.handleOnSubmit} inputValues={mockedData} />)

    expect(firstname.value).toBe(mockedData.firstname)
    expect(surname.value).toBe(mockedData.surname)
    expect(email.value).toBe(mockedData.email)
    expect(password.value).toBe(mockedData.password)
  })

  it('should call handleSubmit', () => {
    const { getByTestId } = render(<CreateUserForm {...props} />)
    const form = getByTestId('form')

    fireEvent.submit(form)

    expect(props.handleOnSubmit).toHaveBeenCalled()
  })
})
