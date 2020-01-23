import gql from 'graphql-tag'

const SELECTED_IMAGE = gql`
    query image ($x: ID!) {
        selectedImage(imgg_id: $x) {
            id
            url
            captions{
                caption
                upvotes
                user{
                    username
                }
            }
        }
    }
`
export default SELECTED_IMAGE