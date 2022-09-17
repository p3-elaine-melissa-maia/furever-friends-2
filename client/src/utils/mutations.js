import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $fullname: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      fullname: $fullname
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_POST = gql`
mutation addPost(
  $caption: String! 
  ) {addPost(
    caption: $caption
  ) {
      _id
      caption
      postAuthor
      createdAt
  }
}
`;

export const REMOVE_POST = gql`
mutation removePost($_id: ID!){
  removePost(_id: $_id){
      _id
      caption
      postAuthor
      createdAt
    }
}
`