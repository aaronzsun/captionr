const { HasManyRelation } = require('objection')
const BaseModel = require('./BaseModel')

class Image extends BaseModel {
  static get tableName() {
    return 'images'
  }

  static get relationMappings() {
    // import relevant tables with const User = require('./User')
    const Caption = require('./Caption')
    return {
      captions: {
        relation: HasManyRelation,
        modelClass: Caption,
        join: {
          from: images.id,
          to: captions.id,
        },

      }
    }
  }
}

module.exports = Image