import styled from 'styled-components'
import { NavLink as link } from 'react-router-dom'


export const SearchBar = styled.input`
  margin-left: 10px;
  font-size: 14px;
  border-radius: 2px;
  border: 0px;
  height: 26px;
  line-height: 15px;
  width: 300px;
  opacity: 70%;
  padding-left: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
  font-family: ${({ theme }) => theme.fonts.header.family};


  &:focus {
    width: 500px;
    outline: none;
    opacity: 100%;
  }
`

export const Logo = styled.div`
  margin-left: 0px;
  margin-right: 10px;
  transition: 0.4s;

  &:hover {
    transform: scale(1.1);
  }
`

export const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  background-color: rgba(255,255,255,0);
  margin-top: 0;
  min-width: 1200px;
`

export const Tab = styled.div`
  font-size: 16px;
  margin: 0;
  margin-right: 20px;
  text-decoration: none;
  transition: transform 0.3s;
  line-height: 80px;

  &:hover {
    transform: scale(1.2);
    text-decoration: underline;
  }
`

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

export const Right = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;
  margin-right: 50px;
  height: 80px;
`

export const Left = styled.div`
  align-self: flex-start;
  display: flex;
  align-items: center;
  padding-left: 0px;
`
export const LoginButton = styled.button`
  height: 40px;
  width: 80px;
  font-size: 14px;
  margin-right: 15px;
  font-family: ${({ theme }) => theme.fonts.header.family};
  cursor: pointer;
  transition: 0.3s;
  border: 0px;
  background-color: rgba(0,0,0,0.3);;
  color: white;

  &:hover {
    transform: scale(1.1);
    outline: none;
  }
`

export const RegisterButton = styled.button`
  height: 40px;
  width: 80px;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.header.family};
  cursor: pointer;
  transition: 0.3s;
  border: 0px;
  background-color: rgba(255,255,255,0.8);
  mix-blend-mode: black;
  font-weight: 800;

  &:hover {
    transform: scale(1.1)
  }
`
