import React from 'react'
import FadeIn from 'react-fade-in'
import {
  Container, LeftBox, RightBox, Header, Text, Pic1, Pic2, RegisterButton, NavLink,
} from './styles'

const About = () => (
  <FadeIn>
    <Container>
      <LeftBox>
        <Header>
            Welcome to Captionr!
        </Header>
        <br />
        <br />
        <Text>
            Captionr is a free picture captioning website where you can caption photos
            and share them with your friends. You can compete with other users
            to create the best caption. Happy Captioning!
        </Text>
      </LeftBox>
      <Pic1><img src="logo.png" alt="logo" height="190px" /></Pic1>
      <br />
      <Pic2><img src="dev.png" alt="dev" height="120px" /></Pic2>
      <RightBox>
        <Header>
            A Little Bit About Us
        </Header>
        <br />
        <br />
        <Text>
            Captionr's full stack was created by students at Harvard Student Agencies DEV
            Winter Engineering Bootcamp.
        </Text>
      </RightBox>
      <br />
      <NavLink to="/register">
        <RegisterButton> Get Started </RegisterButton>
      </NavLink>
    </Container>
  </FadeIn>

)

export default About
