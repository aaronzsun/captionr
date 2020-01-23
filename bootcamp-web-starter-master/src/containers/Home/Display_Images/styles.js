import styled from 'styled-components'

export const Image = styled.img`
    margin: 20px;
    border: 3px solid black;
    transition: 0.4s;
    cursor: pointer;

    &:hover{
        transform: scale(1.1)
    }
`