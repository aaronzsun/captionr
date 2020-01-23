import React from 'react'
import FadeIn from 'react-fade-in'
import {
  Container, CreateBox, Image, Caption, Submit, CaptionTitle,
} from './styles'

const Create = () => (
  <FadeIn>
    <Container>
      <CreateBox>
        <Image />
        <CaptionTitle>Enter a Caption</CaptionTitle>
        <Caption type="text" />
        <Submit> Submit Caption </Submit>
      </CreateBox>
    </Container>
  </FadeIn>

)

export default Create
