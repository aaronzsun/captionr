const merge = require('lodash.merge')
const Auth = require('./Auth')
const Caption = require('./Caption')
const resolvers = [Auth, Caption]

module.exports = merge(...resolvers)
