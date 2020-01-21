const casual = require('casual')
const userData = require('./users')
const imageData = require('./images')

// 'password' hashed with bcrypt scheme

casual.define('caption', ({user_id, image_id}) => ({
  id: casual.uuid,
  user_id,
  image_id,
  caption: casual.sentence,
  upvotes: casual.integer(1, 20),
  createdAt: casual.moment,
  updatedAt: casual.moment,
}))


const captions = []

for (let i = 0; i < 20; ++i) {
  const user_id = casual.random_element(userData).id
  const image_id = casual.random_element(imageData).id
  captions.push(casual.caption({user_id, image_id}))
}

module.exports = captions
