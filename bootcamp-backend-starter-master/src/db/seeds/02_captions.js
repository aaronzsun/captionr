const captionData = require('../../../data/captions')


exports.seed = knex => knex('captions').del()
  .then(() => knex('captions').insert(captionData))
