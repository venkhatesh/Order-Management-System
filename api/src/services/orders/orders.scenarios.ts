import type { Prisma, Order } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.OrderCreateArgs>({
  order: { one: { data: {} }, two: { data: {} } },
})

export type StandardScenario = ScenarioData<Order, 'order'>
