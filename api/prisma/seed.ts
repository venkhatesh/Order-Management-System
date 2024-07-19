import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()

async function main() {

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
    
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
  })