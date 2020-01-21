const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    users: [User!]!
    images: [Image!]!
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
  type Image {
    id: ID!
    caption: Caption!
    url: String!
  }
`
