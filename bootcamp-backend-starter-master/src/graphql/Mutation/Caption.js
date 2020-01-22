const Caption = require('../../models/Caption')

const submit = async (obj, { input }) => {
  const newCaption = await Caption.query().insert(input)
    return newCaption
}

const vote = async (obj, {caption_id}) => {
  const addVote = await Caption.query().findById(caption_id).increment('upvotes', 1)
  console.log(addVote)
  return addVote
}
const resolver = {
  Mutation: {
    submit,
    vote
  },
}

module.exports = resolver
