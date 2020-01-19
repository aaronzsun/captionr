const User = require('../../models/User.js')

const AllUsers = async () => {
    const u = await User.query()
    return u
}

const resolver = {
  Query: {
    users: AllUsers,
  },
}

module.exports = resolver
