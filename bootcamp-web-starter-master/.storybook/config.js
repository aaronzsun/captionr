import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { BrowserRouter as Router } from 'react-router-dom'
import { configure, addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import theme from '../src/theme'
import client from '../src/client'

const req = require.context('../src', true, /story\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(story => (
  <ApolloProvider client={client}>
    <Router>
      <ThemeProvider theme={theme}>{story()}</ThemeProvider>
    </Router>
  </ApolloProvider>
))

configure(loadStories, module)
