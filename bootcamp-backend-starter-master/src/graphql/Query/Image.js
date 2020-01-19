const Image = require('../../models/Image.js')

const AllImages = async () => {
    const i = await Image.query()
    return i
}

const resolver = {
  Query: {
    images: AllImages,
  },
}

module.exports = resolver
