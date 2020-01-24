const { UserInputError } = require('apollo-server-express')
const User = require('../../models/User')
const {
  hashPassword, comparePassword, createToken,
} = require('../../lib/auth')


const login = async (obj, { username, password }) => {
  const user = await User.query().findOne({
    username,
  })
  if (!user) {
    throw new UserInputError('Invalid username or password')
  }

  const validPassword = await comparePassword(password, user.password)
  if (!validPassword) {
    throw new UserInputError('Invalid username or password')
  }


  // If successful login, set authentication information
  const payload = {
    id: user.id,
  }
  const token = createToken(payload)

  return { user, token }
}

const register = async (obj, { username, password } ) => {
  const usernameExists = await User.query().findOne({ username })
  if (usernameExists) {
    throw new UserInputError('Username is already in use')
  }

  const passwordHash = await hashPassword(password)
  const user = await User.query().insertAndFetch({
    username,
    password: passwordHash,
  })

  // If successful registration, set authentication information
  const payload = {
    id: user.id,
  }
  const token = createToken(payload)

  return { user, token }
}

const resolver = {
  Mutation: { login, register },
}

module.exports = resolver
