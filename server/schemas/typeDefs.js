const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    fullname: String
    email: String
    password: String
  }
  type Post {
    _id: ID
    username: String
    img: String
    caption: String
    createdAt: String
    comments: [Comment]
  }
  type Comment {
    _id: ID
    commentBody: String
    username: String
  }
  type Auth {
    token: ID
    user: User
  }
  type Query {
    users: [User]
    user(userId: ID!): User
    me: User
    posts(username: String, img: String, caption: String, comment: ID): [Post]
    comments(_id: String, username: String): [Comment]
  }
  type Mutation {
    addUser(username: String!, fullname: String!, email: String!, password: String!): Auth
    addPost(userId: ID!, img: String, caption: String!): Post
    addComment(userId: ID!, commentBody: String!): Comment
    updateUser(userId: ID!, username: String, fullname: String, email: String, password: String): User
    updatePost(postId: ID!, img: String, caption: String): Post
    updateComment(commentId: ID!, commentBody: String!): Comment
    login(email: String!, password: String!): Auth
  }
`;
module.exports = typeDefs;