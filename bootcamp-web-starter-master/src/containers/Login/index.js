import React from 'react'
import FadeIn from 'react-fade-in'
import {
  LoginBox, UsernameInput, PasswordInput, Button,
} from './styles'

const Login = () => (
  <FadeIn>
    <LoginBox>
      <UsernameInput placeholder="Username" type="text" />
      <PasswordInput placeholder="Password" type="text" />
      <br />
      <Button> Log In </Button>
    </LoginBox>
  </FadeIn>
)

export default Login
