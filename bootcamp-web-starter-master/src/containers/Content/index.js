import React from 'react'
import FadeIn from 'react-fade-in'
import { Title } from './styles'
import { useParams } from 'react-router-dom'
import SELECTED_IMAGE from './graphql'
import {useQuery} from '@apollo/react-hooks'
import VoteMenu from './vote-menu'

const Content = () => {
    const {id} = useParams()
    const { loading, error, data } = useQuery(SELECTED_IMAGE,{
        variables: {x: id}
    })

    if(loading) return "loading..."
    if(error) return "error..."
    console.log(data.selectedImage.url)
    return (
        <FadeIn>
            <Title> View Captions And Vote On Your Favorite </Title>
            <div style={{textAlign:'center'}}>
                <img src={data.selectedImage.url} style={{
                    padding:'20px',display:'inline-Block',
                }} key={id} alt="Smiley face" height="400" width="400" />
            </div>
            <VoteMenu img_id={id} />
        </FadeIn>
    )
}

export default Content