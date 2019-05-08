/* eslint-disable no-undef */
import React from 'react'
import { render } from 'react-testing-library'
import 'jest-dom/extend-expect'
import CreateUser from './CreateUser'
import { MockedProvider } from 'react-apollo/test-utils'

describe('<CreateUser/>', () => {
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
})

