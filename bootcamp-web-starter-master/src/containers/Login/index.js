import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import FadeIn from 'react-fade-in'
import {
  LoginBox, UsernameInput, PasswordInput, Button,
} from './styles'

import { useMutation } from '@apollo/react-hooks'
import LOGIN from './graphql'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const [login] = useMutation(LOGIN, {
    variables: {
      username,
      password,
    },
    onCompleted: ({ login: { token } }) => {
      console.log("hi")
      console.log("token", token)
      localStorage.setItem('token', token)
      history.push('/')
    },
  })
  return (
    <FadeIn>
    <LoginBox>
      <UsernameInput placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} type="text" />
      <PasswordInput placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} type="password" />
      <br />
      <Button onClick={login}>  Log In </Button>
    </LoginBox>
  </FadeIn>
  )
  
}

export default Login

