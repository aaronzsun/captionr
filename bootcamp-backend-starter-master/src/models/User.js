const { HasManyRelation } = require('objection')

const BaseModel = require('./BaseModel')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
<<<<<<< HEAD
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
=======
<<<<<<< Updated upstream
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
=======
    // import relevant tables with const User = require('./User')
    return {
        //TODO CREATE RELATION
>>>>>>> Stashed changes
>>>>>>> 15e650d... Frontend changes
    }
  }
}

module.exports = User