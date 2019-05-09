import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'
import 'jest-dom/extend-expect'
import Login from './Login'
import * as Router from '@reach/router'

describe('<Login/>', () => {
  afterEach(() => {
    cleanup()
  })

  it('Should have a heading title', () => {
    const { getByTestId } = render(<Login />)
    expect(getByTestId('heading')).toHaveTextContent(/sign/i)
  })

  it('Should have a form tag', () => {
    const { container } = render(<Login />)
    expect(container.querySelector('form')).toBeInTheDocument()
  })

  it('should have an email and password input', () => {
    const { getByPlaceholderText } = render(<Login />)

    const email = getByPlaceholderText('Email')
    const password = getByPlaceholderText('Password')

    expect(email).toBeInTheDocument()
    expect(password).toBeInTheDocument()
  })

  it('Submit button should be disabled if input fields has no values', () => {
    const { getByText } = render(<Login />)

    const button = getByText(/submit/i)

    expect(button).toBeDisabled()
  })

  it('Input values should chnage', () => {
    const { getByPlaceholderText, getByText } = render(<Login />)

    const email = getByPlaceholderText('Email')
    const password = getByPlaceholderText('Password')
    const button = getByText(/submit/i)

    fireEvent.change(email, { target: { value: 'tiago@appliedblockchain' } })
    fireEvent.change(password, { target: { value: 'supersecretpassword1234' } })

    expect(email.value).toBe('tiago@appliedblockchain')
    expect(password.value).toBe('supersecretpassword1234')
    expect(button).toBeEnabled()
  })

  it('Should submit the form if has values', () => {
    const { getByPlaceholderText, getByText } = render(<Login />)

    const email = getByPlaceholderText('Email')
    const password = getByPlaceholderText('Password')
    const button = getByText(/submit/i)

    Router.navigate = jest.fn()

    fireEvent.change(email, { target: { value: 'tiago@appliedblockchain' } })
    fireEvent.change(password, { target: { value: 'supersecretpassword1234' } })

    fireEvent.click(button)

    expect(Router.navigate).toHaveBeenCalled()
  })
})
