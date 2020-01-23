import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import FadeIn from 'react-fade-in'
import {
  LoginBox, UsernameInput, PasswordInput, Button, ConfirmationInput,
} from './styles'
import { useMutation } from '@apollo/react-hooks'
import REGISTER from './graphql'

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  // const [confirm, setConfirm] = useState('')
  const history = useHistory()

  const [register] = useMutation(REGISTER, {
    variables: {
      username,
      password,
      // confirm
    },
    onCompleted: ({ register: { token } }) => {
      localStorage.setItem('token', token)
      history.push('/')
    }
  })

  return (
  <FadeIn>
    <LoginBox>
      <UsernameInput placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} type="text" />
      <PasswordInput placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} type="password" />
      {/* <ConfirmationInput placeholder="Confirm Password" value={confirm} onChange={e => setConfirm(e.target.value)} type="text" /> */}
      <br />
      <Button onClick={register}> Register </Button>
    </LoginBox>
  </FadeIn>

  )
}
export default Register
