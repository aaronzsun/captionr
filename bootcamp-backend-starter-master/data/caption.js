const casual = require('casual')
const userData = require('./user')
const imageData = require('./image')

// 'password' hashed with bcrypt scheme

casual.define('caption', ({user_id, image_id}) => ({
  id: casual.uuid,
  user_id,
  image_id,
  caption: casual.text,
  upvotes: 0,
  created_at: casual.moment,
  updated_at: casual.moment,
}))


const captions = []

for (let i = 0; i < 20; ++i) {
  const user_id = casual.random_element(userData).id
  const image_id = casual.random_element(imageData).id
  captions.push(casual.caption({user_id, image_id}))
}

module.exports = captions
