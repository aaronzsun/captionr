<<<<<<< HEAD
const { HasManyRelation } = require('objection')
=======
<<<<<<< Updated upstream
const { HasManyRelation } = require('objection')
=======
>>>>>>> Stashed changes
>>>>>>> 15e650d... Frontend changes
const BaseModel = require('./BaseModel')

class Image extends BaseModel {
  static get tableName() {
    return 'images'
  }

  static get relationMappings() {
<<<<<<< HEAD
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
=======
<<<<<<< Updated upstream
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
=======
    // import relevant tables with const User = require('./User')
    return {
        //TODO CREATE RELATION
>>>>>>> Stashed changes
>>>>>>> 15e650d... Frontend changes
    }
  }
}

module.exports = Image