import { db } from 'src/lib/db'
import type { MutationResolvers, QueryResolvers } from 'types/graphql'

export const orderPizzas: QueryResolvers['orderPizzas'] = () => {
  return db.orderPizza.findMany()
}

export const orderPizza: QueryResolvers['orderPizza'] = ({ orderId, pizzaId }) => {
  return db.orderPizza.findUnique({
    where: {
      orderId_pizzaId: {
        orderId,
        pizzaId,
      },
    },
  })
}

export const createOrderPizza: MutationResolvers['createOrderPizza'] = ({ orderId, pizzaId }) => {
  return db.orderPizza.create({
    data: {
      order: {
        connect: { id: orderId },
      },
      pizza: {
        connect: { id: pizzaId },
      },
    },
  })
}

export const deleteOrderPizza: MutationResolvers['deleteOrderPizza'] = ({ orderId, pizzaId }) => {
  return db.orderPizza.delete({
    where: {
      orderId_pizzaId: {
        orderId,
        pizzaId,
      },
    },
  })
}
