const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    selectedImage(imgg_id: ID!): Image!
    users: [User!]!
    images: [Image!]!
    victories(user_id: ID!, image_id: ID!): [Caption]!
    imageCaptions(img_id: ID!): [Caption]!
  }

  type Mutation {
    login(username: String!, password: String!): AuthReturn!
    register(username: String!, password: String!): AuthReturn!
    submit(input: CaptionInput! ): Caption!
    vote(caption_id: ID!): String!
  }

  type Caption {
    id: ID!
    image: Image!
    user: User!
	  caption: String!
	  upvotes: Int!
  }

  type User {
    id: ID!
    username: String!
    password: String!
    createdAt: String!
    updatedAt: String!
  }

  type AuthReturn {
    token: String!
    user: User!
  }
  type Image {
    id: ID!
    captions: [Caption]!
    url: String!
  }

  input CaptionInput {
    caption: String!, 
    image_id: ID!
    user_id: ID!
  }
`
