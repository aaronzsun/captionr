const Image = require('../../models/Image.js')
const Caption = require('../../models/Caption.js')

const AllImages = async () => {
    const i = await Image.query()
    return i
}
const ImageCaptions = async ({ image_id }) => {
  const c = await Caption.query().findById(image_id)
  return c
}

const resolver = {
  Query: {
    images: AllImages,
  },
  Image: {
    caption: ImageCaptions
  }
}

module.exports = resolver