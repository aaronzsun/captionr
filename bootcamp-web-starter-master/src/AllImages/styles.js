import styled from 'styled-components'
import { NavLink as link } from 'react-router-dom'

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  margin: auto;
`

export const Slider = styled.div`
  width: 100%;
  height: 204px;
  overflow: auto;
  white-space: nowrap;
`

export const Input = styled.input.attrs(({ theme }) => ({
  placeholderColor: theme.colors.fonts.placeholder,
}))`
  flex: 1;
  max-width: 450px;
  height: 30px;
  line-height: 16px;
  font-family: ${({ theme }) => theme.fonts.body.family};
  font-weight: ${({ theme }) => theme.fonts.body.weight};
  font-size: 14px;
  border: none;
  background: ${({ theme }) => theme.colors.layout.secondary};
  border-radius: 2px;
  margin-right: 10px;
  padding-left: 5px;
`

export const Button = styled.button`
  height: 30px;
  width: 150px;
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-weight: ${({ theme }) => theme.fonts.header.weight};
  font-size: 14px;
  background: ${({ theme }) => theme.colors.layout.accent};
  color: ${({ theme }) => theme.colors.fonts.button};
  border: none;
  border-radius: 2px;

  &:hover {
    background: ${({ theme }) => theme.colors.layout.darkAccent};
    width: 400px;
    transition: width 0.5s;
    cursor: pointer;
  }
`

export const Header = styled.h1`
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-weight: ${({ theme }) => theme.fonts.header.weight};
  font-size: 40px;
  text-align: center;
  color: ${({ theme }) => theme.colors.fonts.header};
`
// when you start pulling from imgur, style ImagesList instead
export const ImagesList = styled.ul`
  list-style: none;
  flex: 1;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`

export const NoImages = styled.h1`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-weight: ${({ theme }) => theme.fonts.header.weight};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.fonts.header};
`

export const NavLink = styled(link).attrs(({ theme }) => ({
  activeStyle: {
    color: theme.colors.fonts.accent,
  },
  exact: true,
}))`
  font-family: sans-serif;
  font-size: 20px;
  color: black;
  margin: 0 20px;
  text-decoration: none;
`

export const Image = styled.img`
  display: inline-block;
  width: 200px;
  height: 200px;
  border: 2px solid transparent;
  &:hover {
    border-color: red;
  }
`