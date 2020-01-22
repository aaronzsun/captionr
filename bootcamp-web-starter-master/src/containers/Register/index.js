import React from 'react'
import FadeIn from 'react-fade-in'
import {
  LoginBox, UsernameInput, PasswordInput, Button, ConfirmationInput,
} from './styles'

const Login = () => (
  <FadeIn>
    <LoginBox>
      <UsernameInput placeholder="Username" type="text" />
      <PasswordInput placeholder="Password" type="text" />
      <ConfirmationInput placeholder="Confirm Password" type="text" />
      <br />
      <Button> Register </Button>
    </LoginBox>
  </FadeIn>

)

export default Login
