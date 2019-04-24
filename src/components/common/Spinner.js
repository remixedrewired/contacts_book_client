import React, { Component } from 'react'
import Loader from 'react-loader-spinner'

import theme from '../../theme'

class LoaderSpinner extends Component {
  render() {
    const {
      type = 'Puff',
      color = theme.colors.lemon,
      width = '110',
      height = '110'
    } = this.props

    return (
      <Loader
        type={type}
        color={color}
        height={height}
        width={width}
      />
    )
  }
}

export default LoaderSpinner