export const schema = gql`
  type User {
    id: Int!
    email: String!
    password: String!
    name: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    users: [User!]! @skipAuth
    user(id: Int!): User @skipAuth
  }

  input CreateUserInput {
    email: String!
    password: String!
    name: String
  }

  input UpdateUserInput {
    email: String
    password: String
    name: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @skipAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @skipAuth
    deleteUser(id: Int!): User! @skipAuth
  }
`
