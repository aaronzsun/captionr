import React from 'react'
import {useQuery} from '@apollo/react-hooks'
import GET_ALL_IMAGES from './graphql'
import { Link } from 'react-router-dom'
import { Image } from './styles.js'


const Display = () => {
    const { loading, error, data } = useQuery(GET_ALL_IMAGES)
    if(loading) return 'loading...'
    if(error) return 'Oops! no images!'
    console.log(data.images)
    return(
    <div style={{textAlign:'center'}}>
        {data.images.slice(0, 12).map((img) => {
            console.log(img);
        return(<Link to={`/content/${img.id}`}><Image key={img.id} src={img.url} alt="Smiley face" height="240" width="240" /></Link>
            )
        })}
    </div>

    )
}

export default Display