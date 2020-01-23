import React, { useContext, useState } from 'react'
// import { useHistory } from 'react-router-dom'
import { ImagesContext, ADD_CAPTION } from '../context'
import {
  Container, ImagesList, Slider,  Header, NoImages, Button, Row, Input,
} from './styles'
import CarouselImage from './CarouselImage'


const dummyData = [
  {url: 'https://picsum.photos/200'},
  {url: 'https://picsum.photos/200'},
  {url: 'https://picsum.photos/200'},
  {url: 'https://picsum.photos/200'},
  {url: 'https://picsum.photos/200'},
]

const AllImages = () => {
  const { state, dispatch } = useContext(ImagesContext)
  const [filter] = useState('')
  const [captionText, setCaptionText] = useState('')

  return (
    <Container>
      <Header>All Images:</Header>
      <Slider showThumbs={false}>
        {dummyData.map(({url}) => <CarouselImage url={url} />)}
      </Slider>
      <Row>
        <Input placeholder="My caption" value={captionText} onChange={e => setCaptionText(e.target.value)} />
        <Button onClick={() => dispatch({ action: ADD_CAPTION, payload: captionText })}>Add Caption</Button>
      </Row>
    </Container>
  )
}

export default AllImages
