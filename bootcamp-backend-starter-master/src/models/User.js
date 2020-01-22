const { HasManyRelation } = require('objection')

const BaseModel = require('./BaseModel')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    const Caption = require('./Caption')
    return {
      captions: {
        relation: HasManyRelation,
        modelClass: Caption,
        join: {
          from: 'users.id',
          to: 'captions.user_id'
        }
      }
    }
  }
}

module.exports = User