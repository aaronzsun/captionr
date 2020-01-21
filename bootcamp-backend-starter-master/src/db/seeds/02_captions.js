const captionData = require('../../../data/caption')


exports.seed = knex => knex('captions').del()
  .then(() => knex('captions').insert(captionData))
