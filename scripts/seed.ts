// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { db } from 'api/src/lib/db'

// Manually apply seeds via the `yarn rw prisma db seed` command.
//
// Seeds automatically run the first time you run the `yarn rw prisma migrate dev`
// command and every time you run the `yarn rw prisma migrate reset` command.
//
// See https://redwoodjs.com/docs/database-seeds for more info

export default async () => {
  try {
    // Create your database records here! For example, seed some users:
    //
    // const users = [
    //   { name: 'Alice', email: 'alice@redwoodjs.com },
    //   { name: 'Bob', email: 'bob@redwoodjs.com },
    // ]
    //
    // await db.user.createMany({ data: users })
    const margherits = await db.pizza.create({
      data: {
          name: 'Margherita',
          toppings: ['Tomato', 'Mozzarella'],
          price:  8.5,
      },
  })

  const pepperoni = await db.pizza.create({
      data: {
          name: 'Pepperoni',
          toppings: ['Tomato', 'Mozzarella', 'Pepperoni'],
          price: 9.5,
      },
  })
  
  // const veggie = await db.pizza.create({
  //     data: {
  //         pizzas: {
  //             create: [
  //                 {pizza: { connect: {id: margherits.id }}},
  //                 {pizza: { connect: {id: pepperoni.id}}}
  //             ]
  //         }
  //     }
  // })

  await db.order.create({
      data: {
        pizzas: {
          create: [
            { pizza: { connect: { id: margherits.id } } },
            { pizza: { connect: { id: pepperoni.id } } },
          ],
        },
      },
    })
    
    console.info(
      '\n  No seed data, skipping. See scripts/seed.ts to start seeding your database!\n'
    )
  } catch (error) {
    console.error(error)
  }
}
