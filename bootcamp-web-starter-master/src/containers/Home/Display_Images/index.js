import React from 'react'
import {useQuery} from '@apollo/react-hooks'
import GET_ALL_IMAGES from './graphql'



const Display = () => {
    const { loading, error, data } = useQuery(GET_ALL_IMAGES)
    if(loading) return 'loading...'
    if(error) return 'Oops! no images!'
    console.log(data)

    return(
    <div>
        {data.map((img) => (<img src={img.url} />))}
    </div>
    )
}

export default Display