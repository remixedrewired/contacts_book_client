import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'

import { Button, TextField } from '@material-ui/core'

const fadeInAnimation = keyframes`${fadeIn}`

const CardHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 235px;
  animation: 1s ${fadeInAnimation};
`

const TextFieldsBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
  min-width: 625px;

  @media (max-width: 680px) {
    min-width: 300px;
    flex-direction: column;
  }
`

const ActionButtonsBar = styled.div`
  display: flex;

  button {
    margin: 0 10px;
  }
`

class CreateNewContact extends Component {
  state = {
    first_name: '',
    last_name: '',
    phone_number: ''
  }

  setContactField = name => event => this.setState({ [name]: event.target.value })

  render() {
    const { toggleCreateNewContact, createNewContact } = this.props
    const {
      first_name,
      last_name,
      phone_number
    } = this.state

    return (
      <CardHolder>
        <TextFieldsBar>
          <TextField
            label='First Name'
            value={first_name}
            onChange={this.setContactField('first_name')}
            variant='outlined'
            margin='normal'
          />
          <TextField
            label='Last Name'
            value={last_name}
            onChange={this.setContactField('last_name')}
            variant='outlined'
            margin='normal'
          />
          <TextField
            label='Phone Number'
            value={phone_number}
            onChange={this.setContactField('phone_number')}
            variant='outlined'
            margin='normal'
          />
        </TextFieldsBar>
        <ActionButtonsBar>
          <Button
            variant="outlined"
            onClick={() => toggleCreateNewContact(false)}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={createNewContact({ first_name, last_name, phone_number })}
          >
            Create
          </Button>
        </ActionButtonsBar>
      </CardHolder>
    )
  }
}

export default CreateNewContact