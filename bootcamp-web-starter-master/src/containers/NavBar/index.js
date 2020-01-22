import React from 'react'
import FadeIn from 'react-fade-in'
import {
  Container, NavLink, Left, Right, SearchBar, LoginButton, RegisterButton, Logo, Tab,
} from './styles'

const Navbar = () => (
  <FadeIn>
    <Container>
      <Left>
        <Logo>
          <NavLink to="/"><img src="logo.png" alt="logo" height="60px" /></NavLink>
        </Logo>
        <Tab>
          <NavLink to="/feed">Feed</NavLink>
        </Tab>
        <Tab>
          <NavLink to="/create">Create</NavLink>
        </Tab>
        <Tab>
          <NavLink to="/profile">Profile</NavLink>
        </Tab>
        <form>
          <SearchBar placeholder="Search Captionr" type="text" />
        </form>
      </Left>

      <Right>
        <NavLink to="/login">
          <LoginButton> Log In </LoginButton>
        </NavLink>
        <NavLink to="/register">
          <RegisterButton href="/login"> Sign Up </RegisterButton>
        </NavLink>
      </Right>
    </Container>
  </FadeIn>
)

export default Navbar
