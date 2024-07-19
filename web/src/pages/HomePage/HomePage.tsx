import { Link, routes, useMatch } from '@redwoodjs/router'
import { Metadata, useMutation, useQuery } from '@redwoodjs/web'
import { useState } from 'react'
import { toast, Toaster } from '@redwoodjs/web/toast'


const PIZZAS_QUERY = gql`
  query PizzasQuery {
    pizzas {
      id
      name
      toppings
      price
    }
  }
`

const CREATE_ORDER_MUTATION = gql`
  mutation CreateOrderMutation($input: CreateOrderInput!) {
    createOrder(input: $input) {
      id
    }
  }
`

const HomePage = () => {
  const { data, loading, error } = useQuery(PIZZAS_QUERY)
  const [createOrder] = useMutation(CREATE_ORDER_MUTATION)
  const [cart, setCart] = useState([])

  const addToCart = (pizza) => {
    setCart([...cart, pizza])
  }

  const placeOrder = async () => {
    try {
      await createOrder({ variables: { input: { pizzas: cart.map(p => p.id)}}})
      toast.success('Order placed successfully')
      setCart([])
    } catch (error){
      toast.error(error.message)
    }
  }

  if (loading) return <div>Loading...</div>
  if(error) return <div>Error: {error.message}</div>

  return (
    <div className="container mx-auto p-4">
      <Toaster />
      <h2 className="text-3xl font-bold mb-8">Pizzas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.pizzas.map((pizza) => (
          <div key={pizza.id} className="border rounded-lg shadow-lg bg-white overflow-hidden">
            <img src={`https://via.placeholder.com/400x200.png?text=${pizza.name}`} alt={pizza.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-2">{pizza.name}</h3>
              <p className="mb-2 text-gray-600">Toppings: {pizza.toppings.join(', ')}</p>
              <p className="mb-4 text-gray-800 font-bold">Price: ${pizza.price.toFixed(2)}</p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={() => addToCart(pizza)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-4">Cart</h2>
          <ul className="mb-4">
            {cart.map((pizza, index) => (
              <li key={index} className="mb-2">{pizza.name}</li>
            ))}
          </ul>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
            onClick={placeOrder}
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  )
}

export default HomePage
