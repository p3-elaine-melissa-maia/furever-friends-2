import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
      _id
      username
      fullname
      email
      password
      posts 
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      fullname
      email
      password
      posts 
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      posts
    }
  }
`;