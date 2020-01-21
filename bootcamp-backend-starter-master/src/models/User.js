const BaseModel = require('./BaseModel')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    const Caption = require('./Caption')
    return {
        //TODO CREATE RELATION
        captions: {
          realtion: HasManyRelation,
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
