const imageData = require('../../../data/image')


exports.seed = knex => knex('images').del()
  .then(() => knex('images').insert(imageData))
