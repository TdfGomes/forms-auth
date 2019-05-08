/* eslint-disable no-undef */
import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'
import 'jest-dom/extend-expect'
import CreateUser from './CreateUser'
import { MockedProvider } from 'react-apollo/test-utils'

describe('<CreateUser/>', () => {
  afterEach(() => {
    cleanup()
  })

  it('Should render', () => {
    const { getByTestId } = render(
      <MockedProvider mocks={[]}>
        <CreateUser />
      </MockedProvider>
    )
    expect(getByTestId('container')).toBeInTheDocument()
  })

  it('To Match Snapshot', () => {
    const { asFragment } = render(
      <MockedProvider mocks={[]}>
        <CreateUser />
      </MockedProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('inputs should change value', () => {
    const { getByPlaceholderText, getByText } = render(
      <MockedProvider mocks={[]}>
        <CreateUser />
      </MockedProvider>
    )

    const firstname = getByPlaceholderText('Firstname')
    const surname = getByPlaceholderText('Surname')
    const email = getByPlaceholderText('Email address')
    const password = getByPlaceholderText('Password')

    fireEvent.change(firstname, { target: { value: 'Tiago' } })
    fireEvent.change(surname, { target: { value: 'Gomes' } })
    fireEvent.change(email, { target: { value: 'tiago@appliedblockchain.com' } })
    fireEvent.change(password, { target: { value: 'supersstrongpass1234' } })
    fireEvent.click(getByText('Submit'))

    expect(firstname.value).toBe('Tiago')
    expect(surname.value).toBe('Gomes')
    expect(email.value).toBe('tiago@appliedblockchain.com')
    expect(password.value).toBe('supersstrongpass1234')
  })
})
