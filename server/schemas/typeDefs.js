const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    fullname: String
    email: String
    password: String
    posts: [Post]!
  }
  type Post {
    _id: ID
    postAuthor: String
    caption: String
    createdAt: String
    comments: [Comment]!
  }
  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }
  type Auth {
    token: ID
    user: User
  }
  type Query {
    users: [User]
    user(userId: ID!): User
    me: User
    posts(username: String): [Post]
    post(postId: ID!): Post
  }
  type Mutation {
    addUser(username: String!, fullname: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPost(caption: String!): Post
    addComment(userId: ID!, commentText: String!): Comment
    removePost(postId: ID!): Post
    removeComment(postId: ID!, commmentId: ID!): Post
  }
`;
module.exports = typeDefs;