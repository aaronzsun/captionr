import React, {useState} from 'react'
import {useQuery} from '@apollo/react-hooks'
import GET_ALL_IMAGES from './graphql'
import { Image, Caption, Form } from './styles.js'
import CreateCaption from './create-caption'

const DisplayCurrentImage = () => {
    const { loading, error, data } = useQuery(GET_ALL_IMAGES)
    const [currentImage, setCurrentImage] = useState(0)
    const [currentCaption, setCurrentCaption] = useState('')

    if(loading) return'loading'
    if(error) return 'Oops! Error!'
    console.log(data)

    return(
    <div>
        <Image key={data.images[currentImage].id} src={data.images[currentImage].url} alt="Smiley face" height="500" width="450" />
        <Form>
            <Caption type="text" value={currentCaption} onChange={e => setCurrentCaption(e.target.value)}/>
            <CreateCaption data={data} currentImage={currentImage} currentCaption={currentCaption} setCurrentImage={setCurrentImage}/>
        </Form>
    </div>
    )
}

export default DisplayCurrentImage