import React from 'react'
import FadeIn from 'react-fade-in'
import {
  Container, CreateBox, Image, Submit, CaptionTitle,
} from './styles'
import DisplayCurrentImage from './render-image'

const Create = () => (
  <FadeIn>
    <Container>
      <CreateBox>
      <DisplayCurrentImage />
      </CreateBox>
    </Container>
  </FadeIn>

)

export default Create
