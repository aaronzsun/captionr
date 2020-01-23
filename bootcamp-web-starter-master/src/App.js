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
import Content from './containers/Content'
import './App.css'

import image1 from './images/background.png'
import image2 from './images/background2.png'
import image3 from './images/background3.png'
import image4 from './images/background4.png'
import image5 from './images/background5.png'
import image6 from './images/background6.png'
import image7 from './images/background7.png'
import image8 from './images/background8.png'


const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <BackgroundSlider
          images={[image2, image3, image1, image4, image6, image7, image8, image5]}
          duration={30}
          transition={2}
        />
        <NavBar />
        <Switch>
          <Route path="/feed" exact component={Home} />
          <Route path="/content/:id">
            <Content/>
          </Route>
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
