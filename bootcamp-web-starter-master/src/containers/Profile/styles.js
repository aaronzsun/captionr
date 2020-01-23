import styled from 'styled-components'

export const ProfileBox = styled.div`
  background-color: white;
  width: 1000px;
  height: 600px;
  display: inline-block;
}
`

export const Username = styled.div`
  padding-top: 50px;
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-size: 30px;
`

export const Points = styled.div`
  padding-top: 20px;
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-size: 20px;
`

export const Title = styled.div`
  margin-top: 50px;
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-size: 25px;
`

export const TopPosts = styled.div`
  width: 800px;
  height: 300px;
  display: inline-block;
  margin-top: 10px;
  text-align: center;
  padding-left: 50px;
`

export const Posts = styled.div`
  display: inline-block;
  width: 200px;
  height: 250px;
  border: 1px solid black;
  border-radius: 3px;
  margin-right: 50px;
  margin-top: 25px;
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`

export const Container = styled.div`
  padding-top: 80px;
  width: 100%;
  height: 100%;
  text-align: center;
`
