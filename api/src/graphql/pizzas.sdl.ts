export const schema = gql`
  type Pizza {
    id: Int!
    name: String!
    toppings: [String]!
    price: Float!
    orders: [OrderPizza]!
  }

  type Query {
    pizzas: [Pizza!]! @skipAuth
    pizza(id: Int!): Pizza @skipAuth
  }

  input CreatePizzaInput {
    name: String!
    toppings: [String]!
    price: Float!
  }

  input UpdatePizzaInput {
    name: String
    toppings: [String]!
    price: Float
  }

  type Mutation {
    createPizza(input: CreatePizzaInput!): Pizza! @skipAuth
    updatePizza(id: Int!, input: UpdatePizzaInput!): Pizza! @skipAuth
    deletePizza(id: Int!): Pizza! @skipAuth
  }
`
