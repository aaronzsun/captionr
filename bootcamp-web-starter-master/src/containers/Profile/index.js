import React from 'react'
import FadeIn from 'react-fade-in'
import {
  ProfileBox, Container, Username, TopPosts, Points, Posts, Title,
} from './styles'

const Profile = () => (
  <FadeIn>
    <Container>
      <ProfileBox>
        <Username> TestAccount1234 </Username>
        <Points> Total Points: 1,000 </Points>
        <Title> Top Captions </Title>
        <TopPosts>
          <Posts />
          <Posts />
          <Posts />
        </TopPosts>
      </ProfileBox>
    </Container>
  </FadeIn>
)

export default Profile
