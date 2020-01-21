const imageData = require('../../../data/images')


exports.seed = knex => knex('images').del()
  .then(() => knex('images').insert(imageData))
