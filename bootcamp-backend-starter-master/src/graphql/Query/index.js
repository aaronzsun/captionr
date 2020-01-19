const merge = require('lodash.merge')
const Users = require('./User')
const Images = require('./Image')
const captions = require('./Caption')

const resolvers = [Users]

module.exports = merge(...resolvers)
