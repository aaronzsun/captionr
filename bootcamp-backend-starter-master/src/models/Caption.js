const BaseModel = require('./BaseModel')

class Caption extends BaseModel {
  static get tableName() {
    return 'caption'
  }

  static get relationMappings() {
    // import relevant tables with const User = require('./User')
    return {
        //TODO CREATE RELATION
    }
  }
}

module.exports = Caption