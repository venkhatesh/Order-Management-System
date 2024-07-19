import { Link, navigate, routes } from '@redwoodjs/router'
import { gql, useMutation } from '@apollo/client'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { Metadata } from '@redwoodjs/web'
import { useState } from 'react'

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($input: CreateUserInput!){
    createUser(input: $input) {
      id
    }
  }
`

const RegisterPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signup, { loading, error }] = useMutation(SIGNUP_MUTATION, {
    onCompleted: () => {
      toast.success('User created successfully')
      navigate(routes.login())
    },
  })

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    signup({variables: {input: { email, password, name: ''}}})
  }

  return (
    <>
      <Toaster/>
      <h2> Register</h2>
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
        <br />
        <label>
          Password:
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /> 
        </label>
        <br/>
        <button type='submit' disabled={loading}>Register</button>
        {error && <div>{error.message}</div>}
      </form>
    </>
  )
}

export default RegisterPage
