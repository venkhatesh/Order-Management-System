# Overview

Order management app is a full-stack web application built with RedwoodJS, designed to experiment with the Redwoodjs Framework. This application has the following features to add users, manage the pizza toppings, Authorization, Authentication, Logging orders.

# Technology Stack

1. Framework : RedwoodJS
2. Frontend : React, Tailwind CSS
3. Backend: Node.js
4. Database: PostgreSQL
5. ORM: Prisma
6. AuthenticationL RedwoodJS AUth
7. GraphQL: Apollo

# Directory Structure

```
.
├── api
│   ├── db
│   │   ├── migrations
│   │   ├── schema.prisma
│   │   └── seed.ts
│   ├── graphql
│   │   ├── orders.sdl.ts
│   │   ├── pizzas.sdl.ts
│   │   └── users.sdl.ts
│   ├── lib
│   │   └── db.ts
│   ├── services
│   │   ├── orders
│   │   │   └── orders.ts
│   │   ├── pizzas
│   │   │   └── pizzas.ts
│   │   └── users
│   │       └── users.ts
│   └── functions
│       └── graphql.ts
├── web
│   ├── src
│   │   ├──

```

# Database Configuration

The application uses PostgreSQL as the database. The schema is managed using Prisma

## Prisma Schema(`api/db/schema.prisma`)

```
model Pizza {
  id       Int      @id @default(autoincrement())
  name     String
  toppings String[]
  price    Float
  orders   OrderPizza[]
}

model Order {
  id        Int      @id @default(autoincrement())
  createdAt DateTime @default(now())
  pizzas    OrderPizza[]
}

model OrderPizza {
  orderId Int
  pizzaId Int
  order   Order @relation(fields: [orderId], references: [id])
  pizza   Pizza @relation(fields: [pizzaId], references: [id])

  @@id([orderId, pizzaId])
}

```
# API Endpoints

## GraphQL Endpoints

The application uses GraphQL for its API. The main endpoint for GraphQL is located at `/api/graphql`

## GraphQL Queries and Mutations

### Queries

Get All Pizzas

```
query PizzasQuery {
  pizzas {
    id
    name
    toppings
    price
  }
}
```

Get All Orders

```
query OrdersQuery {
  orders {
    id
    createdAt
    pizzas {
      pizza {
        name
      }
    }
  }
}
```

### Mutations

Create Order
```
mutation CreateOrderMutation($input: CreateOrderInput!) {
  createOrder(input: $input) {
    id
  }
}
```

Create User
```
mutation CreateUserMutation($input: CreateUserInput!) {
  createUser(input: $input) {
    id
  }
}
```

# Seeding the Database

## To seed the database with initial data, run the seed script

```
yarn rw prisma db seed
```
