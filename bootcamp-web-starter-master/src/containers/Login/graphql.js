import gql from 'graphql-tag'


const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username:$username, password:$password){
      token
    }
  }
`

export default LOGIN
