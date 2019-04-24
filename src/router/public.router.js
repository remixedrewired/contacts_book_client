import React, { Component } from 'react'
import { compose } from 'redux'

import { Route, Switch, withRouter } from 'react-router-dom'

import ContactsBook from '../containers/ContactsBook'

const routes = [
  {
    component: ContactsBook,
    exact: true,
    path: '/'
  }
]

class PublicRouter extends Component {
  render() {
    return (
      <Switch>
        {
          routes.map((route, index) => (
            <Route {...route} key={index} />
          ))
        }
      </Switch>
    )
  }
}

export default compose(withRouter)(PublicRouter)