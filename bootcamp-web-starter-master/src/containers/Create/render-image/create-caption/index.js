import SUBMIT from './graphql'
import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import {Submit} from '../styles.js'

const CreateCaption = ({data, currentImage, currentCaption, setCurrentImage}) => {
    const [addCaption, {loading, error}] = useMutation(SUBMIT, {
        variables: {
            input: {
                caption: currentCaption,
                image_id: data.images[currentImage].id
            }
        }
    })
    if(loading) return'loading'
    if(error) return 'Oops! Error!'
    return(
        <Submit onClick={() => {
            addCaption()
            setCurrentImage(currentImage + 1)
            }}> Submit Caption </Submit>
    )
}

export default CreateCaption