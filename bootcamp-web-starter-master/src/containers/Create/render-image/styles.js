import styled from 'styled-components'

export const Image = styled.img`
    margin: 20px;
    border: 3px solid black;
    transition: 0.4s;
`
export const Submit = styled.button`
  width: 400px;
  height: 50px;
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.header.family};
  transition: 0.4s;
  margin-top: 40px;
  background-color: rgba(53, 195, 243, 0.9);
  font-weight: 900;
  border: 0px solid black;
  border-radius: 0px;
  color: white;
  cursor: pointer;
  outline: none;
`

export const Caption = styled.input`
  height: 200px;
  width: 400px;
  border: 1px solid black;
  text-align: left;
  margin-top: 20px;
  vertical-align: top;
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-size: 20px;
`
