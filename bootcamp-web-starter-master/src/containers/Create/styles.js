import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 80px;
  width: 100%;
  height: 100%;
  text-align: center;
`

export const Image = styled.div`
  height: 500px;
  width: 450px;
  border: 1px solid black;
  float: left;
  margin-top: 50px;
  margin-left: 50px;
`

export const CaptionTitle = styled.text`
  display: inline-block;
  font-size: 25px;
  font-family: ${({ theme }) => theme.fonts.header.family};
  margin-top: 100px;
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

  &:hover {
    transform: scale(1.1);
    outline: none;
  }
`

export const Caption = styled.textarea`
  height: 200px;
  width: 400px;
  border: 1px solid black;
  text-align: left;
  margin-top: 20px;
  vertical-align: top;
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-size: 20px;
`

export const CreateBox = styled.div`
  background-color: white;
  width: 1000px;
  height: 600px;
  display: inline-block;
}
`
