const Image = require('../../models/Image.js')
const Caption = require('../../models/Caption.js')

const AllImages = async () => {
    const i = await Image.query()
    return i
}

const imageCaptions = async (img_id) => {
  const x = await Image.query().findById(img_id)
  return x
}

const caption = async ({ image_id }) => {
  const c = await Caption.query().findById(image_id)
  return c
}

const resolver = {
  Query: {
    images: AllImages,
    imageCaptions,
  },
  Image: {
    caption,
  }
}

module.exports = resolver