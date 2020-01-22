const Image = require('../../models/Image.js')
const Caption = require('../../models/Caption.js')

const AllImages = async () => {
    const i = await Image.query()
    return i
}

const imageCaptions = async ({ img_id }) => {
  const x = await Caption.query().where('image_id', img_id)
  return x
}

const captions = async ({ image_id }) => {
  const c = await Caption.query().findById(image_id)
  return c
}

const resolver = {
  Query: {
    images: AllImages,
    imageCaptions,
  },
  Image: {
    captions,
  },
  Caption: {
    image,
    user,
  }
}

module.exports = resolver