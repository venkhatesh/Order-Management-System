export const schema = gql`
  type OrderPizza {
    orderId: Int!
    pizzaId: Int!
    order: Order!
    pizza: Pizza!
  }

  type Query {
    orderPizzas: [OrderPizza!]! @skipAuth
    orderPizza(orderId: Int!, pizzaId: Int!): OrderPizza @skipAuth
  }

  type Mutation {
    createOrderPizza(orderId: Int!, pizzaId: Int!): OrderPizza! @skipAuth
    deleteOrderPizza(orderId: Int!, pizzaId: Int!): OrderPizza! @skipAuth
  }
`
