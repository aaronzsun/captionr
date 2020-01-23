import gql from 'graphql-tag'


const REGISTER = gql`
  mutation register($username: String!, $password: String!) {
    register(username:$username, password:$password){
      token
    }
  }
`

export default REGISTER
