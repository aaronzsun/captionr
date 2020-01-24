const { AuthenticationError } = require('apollo-server-express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config')

/**
 *
 * @param {object} payload
 * @returns {Promise<string>}
 */

const createToken = payload => jwt.sign(payload, config.tokenSecret)

/**
 *
 * @param {*} token
 * @returns {Promise<{id: number, phoneNumber: string}>}
 */
const decodeToken = token => {
  if (!token) {
    throw new AuthenticationError('Invalid token, please log in.')
  }
  try {
    console.log(token)
    console.log(jwt.verify(token, config.tokenSecret))
    return jwt.verify(token, config.tokenSecret)
  } catch (error) {
    throw new AuthenticationError('Invalid token, please log in.')
  }
}


/**
 *
 * @param {string} password - typically the user entered password
 * @returns {Promise.<string>}
 */
const hashPassword = password => new Promise((resolve, reject) => {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      if (err) {
        reject(err)
      } else {
        resolve(hash)
      }
    })
  })
})


/**
 *
 * @param {string} password - typically the user entered password
 * @param {string} hashedPassword - typically the password that was previously hashed by bcrypt
 * @returns {Promise.<boolean>}
 */
const comparePassword = (password, hashedPassword) => new Promise((resolve, reject) => {
  bcrypt.compare(password, hashedPassword, (err, matches) => {
    if (err) {
      reject(err)
    } else {
      resolve(matches)
    }
  })
})


module.exports = {
  hashPassword, comparePassword, createToken, decodeToken,
}
