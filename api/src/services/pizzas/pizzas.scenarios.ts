import type { Prisma, Pizza } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PizzaCreateArgs>({
  pizza: {
    one: {
      data: { name: 'String', toppings: 'String', price: 2661035.888739498 },
    },
    two: {
      data: { name: 'String', toppings: 'String', price: 1782424.8894561157 },
    },
  },
})

export type StandardScenario = ScenarioData<Pizza, 'pizza'>
