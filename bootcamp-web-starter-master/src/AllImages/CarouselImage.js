import React from 'react'
import {Image} from './styles'

const CarouselImage = ({ url }) => // instead of url pass image id that pass from backend
  <Image src={url}/>

  // add functionality so that on click directs us another page to add 
  // a caption for the specific image

export default CarouselImage;