const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    users: [User!]!
    images: [String!]!
    captions: [Caption!]!
  }

  type Mutation {
    login(email: String!, password: String!): AuthReturn!
    register(email: String!, password: String!): AuthReturn!
    submit(caption_text: String!): Caption!
  }

  type Caption {
    id: ID!
    user_id: ID!
	  image_id: ID!
	  caption: String!
	  upvotes: int!
  }

  type User {
    id: ID!
    email: String!
    createdAt: String!
    updatedAt: String!
  }

  type AuthReturn {
    token: String!
    user: User!
  }
`
