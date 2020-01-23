import VOTE from './graphql'
import React from 'react'
import {useMutation} from '@apollo/react-hooks'

const VoteButton = ({cap_id}) => {
    const [vote, { loading, error}] = useMutation(VOTE, {
        variables: {caption_id: cap_id}
    })
    if(loading) return "loading..."
    if(error) return "error..."

    return (
        <button onClick={() => {
            vote()
        }}>VOTE</button>
    )
}

export default VoteButton