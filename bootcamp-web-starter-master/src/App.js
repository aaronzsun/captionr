import React from 'react'
import BackgroundSlider from 'react-background-slider'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import client from './client'
import Home from './containers/Home'
import NavBar from './containers/NavBar'
import Login from './containers/Login'
import Create from './containers/Create'
import Profile from './containers/Profile'
import Register from './containers/Register'
import About from './containers/About'
import './App.css'

import image1 from './images/background2.png'
import image2 from './images/background.png'
import image3 from './images/background3.png'
import image4 from './images/background4.png'
import image5 from './images/background5.png'


const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <BackgroundSlider
          images={[image1, image2, image3, image4, image5]}
          duration={10}
          transition={2}
        />
        <NavBar />
        <Switch>
          <Route path="/feed" exact component={Home} />
          <Route path="/create" exact component={Create} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/" exact component={About} />
        </Switch>
      </ApolloProvider>
    </ThemeProvider>
  </Router>
)

export default App
