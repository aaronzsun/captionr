import React from 'react'
import FadeIn from 'react-fade-in'
import {
  Container, LeftBox, RightBox, Header, Text, Pic1, Pic2, RegisterButton, NavLink,
} from './styles'
<<<<<<< HEAD

=======
>>>>>>> 3a0c7c9ac1c28b0f310528dd558b6251352944c5

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
            Captionr is free picture captioning website where you can caption photos
            and share them with your friends. You can compete with other users
            to create the best caption. Happy Captioning!
        </Text>
      </LeftBox>
      <Pic1><img src="logo.png" alt="logo" height="190px" /></Pic1>
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
      <Pic2><img src="dev.png" alt="dev" height="120px" /></Pic2>
      <NavLink to="/register">
        <RegisterButton> Get Started </RegisterButton>
      </NavLink>
    </Container>
  </FadeIn>

)

export default About
