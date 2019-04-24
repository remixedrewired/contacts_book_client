import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import PublicRouter from './public.router'

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <PublicRouter />
      </BrowserRouter>
    )
  }
}

export default Router