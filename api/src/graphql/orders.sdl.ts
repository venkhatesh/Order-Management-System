export const schema = gql`
  type Order {
    id: Int!
    pizzas: [OrderPizza!]!
    createdAt: DateTime!
  }

  input CreateOrderInput {
    pizzaIds: [Int!]!
  }

  input UpdateOrderInput {
    pizzaIds: [Int!]
  }

  type Query {
    orders: [Order!]! @skipAuth
    order(id: Int!): Order @skipAuth
  }

  type Mutation {
    createOrder(input: CreateOrderInput!): Order! @skipAuth
    updateOrder(id: Int!, input: UpdateOrderInput!): Order! @skipAuth
    deleteOrder(id: Int!): Order! @skipAuth
  }
`
