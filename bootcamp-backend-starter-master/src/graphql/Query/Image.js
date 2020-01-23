const Image = require('../../models/Image.js')
const User = require('../../models/User.js')
const Caption = require('../../models/Caption.js')

const AllImages = async () => {
    const i = await Image.query()
    return i
}

const selectedImage = async (obj, { imgg_id }) => {
  const g = await Image.query().findById(imgg_id)
  console.log('this is g: ', g)
  return g
}

const imageCaptions = async (obj, { img_id }) => {
  const x = await Caption.query().where('image_id', img_id)
  return x
}

const captions = async ({ id }) => {
  const c = await Caption.query().where('image_id', id)
  return c
}

const image = async ({ image_id }) => {
  const a = await Image.query().findById(image_id)
  return a
}
const user = async ({ user_id }) => {
  const b = await User.query().findById(user_id)
  return b
}
const resolver = {
  Query: {
    images: AllImages,
    imageCaptions,
    selectedImage,
  },
  Image: {
    captions,
  },
  Caption: {
    image,
    user,
  },
}

module.exports = resolver