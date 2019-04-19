import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

export const CREATE_USER = gql`
  mutation createNewUser(
    $firstname: String!
    $surname: String!
    $password: String!
    $email: String!
  ) {
    createUser(
      firstname: $firstname
      surname: $surname
      password: $password
      email: $email
    ) {
      _id
      firstname
      email
      createdAt
      updatedAt
    }
  }
`

export const withCreateUser = graphql(CREATE_USER)
