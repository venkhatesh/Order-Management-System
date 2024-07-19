-- AlterTable
ALTER TABLE "User" ADD COLUMN     "salt" TEXT NOT NULL DEFAULT 'default_salt';

-- CreateTable
CREATE TABLE "Pizza" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "toppings" TEXT[],
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Pizza_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderPizza" (
    "orderId" INTEGER NOT NULL,
    "pizzaId" INTEGER NOT NULL,

    CONSTRAINT "OrderPizza_pkey" PRIMARY KEY ("orderId","pizzaId")
);

-- AddForeignKey
ALTER TABLE "OrderPizza" ADD CONSTRAINT "OrderPizza_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderPizza" ADD CONSTRAINT "OrderPizza_pizzaId_fkey" FOREIGN KEY ("pizzaId") REFERENCES "Pizza"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
