import { Link, routes, navigate } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { useState } from 'react'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { useAuth } from 'src/auth'

const LoginPage = () => {

  const { logIn } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await logIn({username: email, password })
    if( response.error ){
      toast.error(response.error)
    }else{
      toast.success('Logged in successfully')
      navigate(routes.home())
    }
  }

  return (
    <>
      <Toaster/>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <label>
          Email:
          <input 
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br/>
        <label>
          password:
          <input 
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br/>
        <button type='submit'>Login</button>
      </form>
    </>
  )
}

export default LoginPage
