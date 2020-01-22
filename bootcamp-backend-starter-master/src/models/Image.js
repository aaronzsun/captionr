const { HasManyRelation } = require('objection')
const BaseModel = require('./BaseModel')

class Image extends BaseModel {
  static get tableName() {
    return 'images'
  }

  static get relationMappings() {
    const Caption = require('./Caption')
    return {
      captions: {
        relation: HasManyRelation,
        modelClass: Caption,
        join: {
          from: 'images.id',
          to: 'captions.image_id',
        }
      }
    }
  }
}

module.exports = Image