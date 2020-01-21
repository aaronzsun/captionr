const Image = require('../../models/Image.js')
const User = require('../../models/User.js')
const Caption = require('../../models/Caption.js')

const victories = async ({ user_id, image_id }) => {
  const v = await Caption.query().where('user_id', user_id).where('image_id', image_id).max('upvotes')
  console.log(v)
  return v
}

const image = async ({ image_id }) => {
    const i = await Image.query().findById(image_id)
    return i
}
const user = async ({ user_id }) => {
    const u = await User.query().findById(user_id)
    return u
}

const resolver = {
  Query: {
    victories,
  },
  Caption: {
    image,
    user,
  }
}

module.exports = resolver