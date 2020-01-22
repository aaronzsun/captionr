const merge = require('lodash.merge')
const Auth = require('./Auth')
const Caption = require('./Caption')
const Image = require('./Image')
const resolvers = [Auth, Caption, Image]

module.exports = merge(...resolvers)
