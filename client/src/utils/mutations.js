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

export const ADD_COMMENT = gql`
  mutation addComment($postId: ID!, $commentText: String!) {
    addComment(postId: $postId, commentText: $commentText) {
      _id
      caption
      postAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

export const REMOVE_POST = gql`
  mutation removePost(
    $postId: ID!
  ) {
    removePost(postId: $postId) {
      _id
      postAuthor
      caption
      createdAt
    }
  }
`;