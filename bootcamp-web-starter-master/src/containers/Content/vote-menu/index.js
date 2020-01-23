import React from 'react'
import {useQuery} from '@apollo/react-hooks'
import IMAGE_CAPTIONS from './graphql'
import VoteButton from './vote-button'


const VoteMenu = ({img_id}) => {
    const { loading, error, data } = useQuery(IMAGE_CAPTIONS,{
        variables: {y: img_id}
    })
    if(loading) return "loading..."
    if(error) return "error..."
    console.log('this is img_id: ', img_id)
    console.log('this is data: ', data)
    return (
            <div style={{textAlign:'center', fontSize:'30px'}}>
                <table style={{textAlign:'center', fontSize:'30px', display: 'inline-block', backgroundColor: 'white', textAlign: 'left', padding: '20px', border:'2px solid black'}}>
                    <tr>
                        <th style={{padding: '20px'}}>Username</th>
                        <th style={{padding: '20px'}}>Caption</th>
                        <th style={{padding: '20px'}}></th>
                        <th>Total Votes</th>
                    </tr>
                    {data.imageCaptions.map((cap_obj) => {
                    return(
                    <tr>
                        <td style={{padding: '20px'}}>{cap_obj.user.username}</td>
                        <td style={{padding: '20px'}}>{cap_obj.caption}</td>
                        <td style={{padding: '20px'}}><VoteButton cap_id={cap_obj.id}/></td>
                        <td style={{padding: '20px'}}>{cap_obj.upvotes}</td>
                    </tr>
                    )
                    })}
                </table>
            </div>
    )
}

export default VoteMenu