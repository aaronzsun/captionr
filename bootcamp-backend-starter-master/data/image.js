const casual = require('casual')

casual.define('image', () => ({
  id: casual.uuid,
  url: casual.url,
  created_at: casual.moment,
  updated_at: casual.moment,
}))


const userData = []

for (let i = 0; i < 20; ++i) {
  userData.push(casual.image)
}

module.exports = userData
