import gql from 'graphql-tag'


const SUBMIT = gql`
    mutation submit ($input: CaptionInput!) {
        submit (input: $input) {
            caption
            id
        }
    }
`
export default SUBMIT