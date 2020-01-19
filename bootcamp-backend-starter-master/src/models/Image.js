const BaseModel = require('./BaseModel')

class Image extends BaseModel {
  static get tableName() {
    return 'images'
  }

  static get relationMappings() {
    // import relevant tables with const User = require('./User')
    return {
        //TODO CREATE RELATION
    }
  }
}

module.exports = Image