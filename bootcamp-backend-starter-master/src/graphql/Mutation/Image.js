
const Flickr = require('flickr-sdk')
const flickr = new Flickr('5a96ecbb7f7691e0d808cfc65c7dd38f')

const Image = require('../../models/Image')

const fetchImages = async (obj, { query }) => {
  let imagearr = []

  let res = await flickr.photos.search({
    text: query,
    extras: ['url_o'],
    per_page: 10
  })
  
  imagearr = res.body.photos.photo.map(({url_o}) => ({url: url_o})).filter(({url}) => !!url)
  console.log(imagearr)
  await Image.query().insert(imagearr)

  return "success"
}



const resolver = {
  Mutation: {
    fetchImages
  },
}

module.exports = resolver
