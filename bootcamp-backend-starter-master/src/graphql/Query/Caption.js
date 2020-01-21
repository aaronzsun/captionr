const Image = require('../../models/Image.js')
const User = require('../../models/User.js')

const victories = async ({ user_id, image_id }) => {
  const v = await Caption.query().where('user_id', user_id).where('image_id', image_id).max('upvotes')
  console.log(v)
  return v
}
const resolver = {
  Query: {
    victories,
  },
  Image: {
    caption: ImageCaptions
  }
}

module.exports = resolver