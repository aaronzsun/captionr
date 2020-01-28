import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 80px;
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
`

export const CaptionTitle = styled.text`
  display: inline-block;
  font-size: 25px;
  font-family: ${({ theme }) => theme.fonts.header.family};
  margin-top: 100px;

`

export const CreateBox = styled.div`
  width: 1200px;
  height: 600px;
  display: flex;
  justify-content: center;
`