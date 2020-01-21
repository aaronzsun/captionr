const Caption = require('../../models/Caption')

const submit = async (obj, { input }) => {
  const newCaption = await Caption.query().insertGraph(input)
    return newCaption
}

const resolver = {
  Mutation: {
    submit,
  },
}

module.exports = resolver
