const merge = require('lodash.merge')
const Users = require('./User')

const resolvers = [Users]

module.exports = merge(...resolvers)
