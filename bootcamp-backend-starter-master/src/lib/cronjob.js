// Add cron jobs here and they will automatically be run on the server!
// npm i --save node-cron
const Flickr = require('flickr-sdk')
const flickr = new Flickr('5a96ecbb7f7691e0d808cfc65c7dd38f')
const Image = require('../models/Image')

const cron = require('node-cron')

module.exports = () => {
  // cron.schedule('*/2 * * * * *', async () => {
  //   console.log('done')
  //   const res = await flickr.photos.search({
  //     extras: ['url_o'],
  //     safe_search: 1,
  //     content_type: 1,
  //     user_id: '93677092@N04',
  //     per_page: 50,
  //   })
  //     let imagearr = res.body.photos.photo.map(({url_o}) => ({url: url_o})).filter(({url}) => !!url)
  //     await Image.query().insert(imagearr)
  // })
}
