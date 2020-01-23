const { BelongsToOneRelation } = require('objection')

const BaseModel = require('./BaseModel')

class Caption extends BaseModel {
    static get tableName() {
        return 'captions'
    }
    static get relationMappings() {
        const User = require('./User')
        const Image = require('./Image')
        return {
            user: {
                relation: BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'captions.user_id',
                    to: 'users.id'
                }
            },
            image: {
                relation: BelongsToOneRelation,
                modelClass: Image,
                join: {
                    from: 'captions.image_id',
                    to: 'images.id'
                }
            }
        }
    }
}

module.exports = Caption