import styled from 'styled-components'
import { NavLink as link } from 'react-router-dom'


export const NavLink = styled(link).attrs(({ theme }) => ({
  activeStyle: {
    color: theme.colors.fonts.accent,
  },
  exact: true,
}))`
    text-decoration: none;
    font-family: ${({ theme }) => theme.fonts.header.family};
    color: ${({ theme }) => theme.colors.fonts.header};
    cursor: pointer;
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
  `

export const RegisterButton = styled.button`
  width: 300px;
  height: 60px;
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.header.family};
  transition: 0.4s;
  margin-top: 80px;
  background-color: rgba(53, 195, 243, 0.9);
  font-weight: 900;
  border: 0px solid black;
  border-radius: 0px;
  color: white;
  cursor: pointer;
  outline: none;
  text-align: center;

  &:hover {
    transform: scale(1.1);
    outline: none;
  }
`

export const Pic1 = styled.div`
    display: float-right;
    width: 250px;
    margin-top: 60px;
    margin-right: 130px;
    border: 0px solid black;
    background-color: #FFB9B3;
    border-radius: 50px;
`

export const Pic2 = styled.div`
    padding-top: 40px;
    display: float-left;
    width: 250px;
    height: 150px;
    margin-top: 60px;
    margin-left: 200px;
    border: 0px solid black;
    background-color: #ACECD5;
    border-radius: 50px;
`

export const LeftBox = styled.div`
  width: 800px;
  height: 120px;
  background-color: white;
  border: 0px solid black;
  margin-top: 60px;
  margin-left: 200px;
  float: left;
  text-align: left;
  padding: 40px;
  padding-top: 25px;
`

export const RightBox = styled.div`
  width: 800px;
  height: 120px;
  background-color: white;
  border: 0px solid black;
  margin-top: 60px;
  float: right;
  text-align: left;
  margin-right: 200px;
  padding: 40px;
  padding-top: 25px;
`

export const Text = styled.text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.body.family};
  color: black;
`

export const Header = styled.text`
  font-size: 30px;
  font-family: ${({ theme }) => theme.fonts.header.family};
  color: black;
`
export const Container = styled.div`
  text-align: center;
`
