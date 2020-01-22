import styled from 'styled-components'

export const UsernameInput = styled.input`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.header.family};
  height: 25px;
  width: 250px;
  background-color: white;
  border: 1px solid black;
  border-radius: 3px;
  padding: 5px;
  padding-left: 10px;
  margin-top: 30px;
`
export const PasswordInput = styled.input`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.header.family};
  height: 25px;
  width: 250px;
  background-color: white;
  border: 1px solid black;
  border-radius: 3px;
  padding: 5px;
  padding-left: 10px;
  margin-top: 20px;
`

export const Button = styled.button`
  width: 260px;
  height: 40px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.header.family};
  transition: 0.4s;
  margin-top: 20px;
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

export const LoginBox = styled.div`
  margin: auto;
  margin-top: 180px;
  text-align: center;
  display: box;
  width: 450px;
  height: 300px;
`

export const Title = styled.div`
  font-size: 30px;
  font-family: ${({ theme }) => theme.fonts.header.family};
  text-align: center;
  padding-top: 50px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.layout.background}
`
