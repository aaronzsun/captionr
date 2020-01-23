import gql from 'graphql-tag'

const IMAGE_CAPTIONS = gql`
    query imageCaptions ($y: ID!) {
        imageCaptions (img_id: $y) {
            id
            caption
            upvotes
            user{
                username
            }
        }
    }
`
export default IMAGE_CAPTIONS