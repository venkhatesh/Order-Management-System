import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String4217901',
        password: 'String',
        updatedAt: '2024-07-18T03:19:20.340Z',
      },
    },
    two: {
      data: {
        email: 'String7774163',
        password: 'String',
        updatedAt: '2024-07-18T03:19:20.340Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
