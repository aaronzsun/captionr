import gql from 'graphql-tag'

const GET_ALL_IMAGES = gql`
    query allImages {
        images {
            url
            id
        }
    }
`
export default GET_ALL_IMAGES