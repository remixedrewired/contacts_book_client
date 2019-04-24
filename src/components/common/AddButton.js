import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { slideInRight } from 'react-animations'

import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import theme from '../../theme'

const slideInRightAnimation = keyframes`${slideInRight}`

const ButtonWrapper = styled.div`
  position: fixed;
  z-index: 9999;
  right: 35px;
  top: 75px;
  animation: 1s ${slideInRightAnimation};

  button {
    background-color: ${theme.colors.deepgreen}

    &:hover {
      background-color: ${theme.colors.powder}
    }
  }

  @media (max-width: 680px) {
    top: 50px;
    right: 25px;
  }
`

class AddButton extends Component {
  render() {
    const { toggleCreateNewContact } = this.props

    return (
      <ButtonWrapper onClick={() => toggleCreateNewContact(true)}>
        <Fab color="primary" aria-label="Add">
          <AddIcon />
        </Fab>
      </ButtonWrapper>
    )
  }
}

export default AddButton