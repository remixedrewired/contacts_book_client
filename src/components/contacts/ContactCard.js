import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'
import theme from '../../theme'

import { Button, TextField } from '@material-ui/core'
import { Delete } from '@material-ui/icons'

const fadeInAnimation = keyframes`${fadeIn}`

const StaticCard = styled.div`
  display: ${props => props.contactMatch ? 'none' : 'flex'};
  align-items: center;
  justify-content: space-around;
  padding: 5px 12px;
  cursor: pointer;
  min-width: 400px;
  border-radius: 4px;
  margin-bottom: 28px;
  transition: all .5s ease;
  animation: 2s ${fadeInAnimation};
  background-image: linear-gradient(to right, ${theme.colors.powder}, ${theme.colors.deepgreen});
  box-shadow: 0 3px 3px -2px rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.14), 0 1px 8px 0 rgba(0,0,0,.12);

  &:hover {
    box-shadow: 0 6px 6px -3px rgba(0,0,0,.2), 0 10px 14px 1px rgba(0,0,0,.14), 0 4px 18px 3px rgba(0,0,0,.12);
  }

  @media (max-width: 678px) {
    flex-direction: column;
    padding: 12px 0 16px 0;
    min-width: 275px;

    h3 {
      font-size: 20px;
      margin-bottom: 15px;
      margin-top: 0;
    }

    mark {
      font-size: 20px;
    }
  }
`

const ContactName = styled.h3`
  font-size: 22px;
  font-weight: 500;
  font-family: 'Inconsolata', monospace;
  margin-left: 15px;
  margin-right: 10px;
`

const ContactPhone = styled.mark`
  font-size: 22px;
  background-color: ${theme.colors.lemon};
  font-family: 'Inconsolata', monospace;
  margin-left: 10px;
  margin-right: 15px;
`

const TextFieldsBar = styled.div`
  display: flex;
  width: 100%;

  div {
    margin-right: 5px;
    margin-left: 5px;
  }

  @media (max-width: 678px) {
    flex-direction: column;
  }
`

const ActionButtonsBar = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 12px;

  button:first-child {
    margin-right: 16px;
  }

  @media (max-width: 678px) {
    justify-content: space-between;
    margin-top: 16px;
  }
`

const DynamicCard = styled.div`
  display: ${props => props.contactMatch ? 'flex' : 'none'};
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  margin-bottom: 28px;
  transition: all .5s ease;
  animation: 2s ${fadeInAnimation};

  svg {
    cursor: pointer;
  }
`

class ContactCard extends Component {
  render() {
    const {
      _id: id,
      first_name: fName,
      last_name: lName,
      phone_number: pNumber,
      setContactToEditState,
      contactInEdit: {
        _id,
        first_name,
        last_name,
        phone_number
      },
      setContactField,
      resetContactToEditDefault,
      deleteExisitingContact,
      updateContactData
    } = this.props

    const singleContact = {
      _id: id,
      first_name: fName,
      last_name: lName,
      phone_number: pNumber
    }
    const contactMatch = _id && _id === id

    return (
      <>
        <StaticCard
          onClick={setContactToEditState(singleContact)}
          contactMatch={contactMatch}
        >
          <ContactName>
            {`${fName} ${lName}`}
          </ContactName>
          <ContactPhone>
            {pNumber}
          </ContactPhone>
        </StaticCard>
        <DynamicCard contactMatch={contactMatch}>
          {
            (_id && contactMatch) &&
            <>
              <Delete onClick={deleteExisitingContact(_id)} />
              <TextFieldsBar>
                <TextField
                  label='First Name'
                  value={first_name}
                  onChange={setContactField('first_name')}
                  variant='outlined'
                  margin='normal'
                />
                <TextField
                  label='Last Name'
                  value={last_name}
                  onChange={setContactField('last_name')}
                  variant='outlined'
                  margin='normal'
                />
                <TextField
                  label='Phone Number'
                  value={phone_number}
                  onChange={setContactField('phone_number')}
                  variant='outlined'
                  margin='normal'
                />
              </TextFieldsBar>
              <ActionButtonsBar>
                <Button
                  variant="outlined"
                  onClick={resetContactToEditDefault}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  onClick={updateContactData({ _id, first_name, last_name, phone_number })}
                >
                  Update
              </Button>
              </ActionButtonsBar>
            </>
          }
        </DynamicCard>
      </>
    )
  }
}

export default ContactCard