// Add cron jobs here and they will automatically be run on the server!
// npm i --save node-cron
const Flickr = require('flickr-sdk')
const flickr = new Flickr('5a96ecbb7f7691e0d808cfc65c7dd38f')
const Image = require('../models/Image')

const cron = require('node-cron')

module.exports = () => {
  /* Example:
    cron.schedule('1 0 * * *', () => {
        console.log("It's a new day! Get up and dance!")
    })
  */
  cron.schedule('*/1 * *', async () => {
    const res = await flickr.photos.search({
      text: 'funny',
      extras: ['url_o'],
      per_page: 10
    })
    
      let imagearr = res.body.photos.photo.map(({url_o}) => ({url: url_o})).filter(({url}) => !!url)
      await Image.query().insert(imagearr)

  })
}
