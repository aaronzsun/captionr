import gql from 'graphql-tag'

export const VOTE = gql`
    mutation vote ($caption_id: ID!) {
        vote (caption_id: $caption_id)
    }
`

export default VOTE