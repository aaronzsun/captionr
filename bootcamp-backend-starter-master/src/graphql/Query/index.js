const merge = require('lodash.merge')
const Users = require('./User')
const Images = require('./Image')
const Captions = require('./Caption')

const resolvers = [Users, Images, Captions]

module.exports = merge(...resolvers)
