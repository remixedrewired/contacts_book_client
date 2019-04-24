import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import ContactsList from '../components/contacts/ContactsList'
import ContactsListTitle from '../components/contacts/ContactsListTitle'
import PaginationBar from '../components/common/PaginationBar'
import SnackBarComponent from '../components/common/SnackBar'
import AddButton from '../components/common/AddButton'
import CreateNewContact from '../components/contacts/CreateNew'

import { fetchContacts, updateContact, createContact, deleteContact } from '../actions/contacts'
import { set as setCurrentPage } from '../actions/pagination'
import {
  set as setContactToEdit,
  reset as resetContactToDefault,
  setContactFields
} from '../actions/contactInEdit'

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

class ContactsBookContainer extends Component {
  state = {
    isLoading: true,
    isSnackBarOpen: false,
    creatingNewContact: false
  }

  componentDidMount = () => {
    const { fetchAllContacts } = this.props
    fetchAllContacts()

    setTimeout(() => this.setState({ isLoading: false }), 3750)
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.apiResponse && nextProps.apiResponse !== this.props.apiResponse) {
      if (nextProps.apiResponse.code === 201 && nextProps.apiResponse.message === 'Created') {
        this.toggleCreateNewContact(false)
      }

      this.setState({ isSnackBarOpen: true })
    }
  }

  toggleSnackBar = isSnackBarOpen => this.setState({ isSnackBarOpen })

  toggleCreateNewContact = creatingNewContact => this.setState({ creatingNewContact })

  render() {
    const { isLoading, isSnackBarOpen, creatingNewContact } = this.state
    const { apiResponse, createNewContact } = this.props

    return (
      <Container>
        <SnackBarComponent
          isSnackBarOpen={isSnackBarOpen}
          toggleSnackBar={this.toggleSnackBar}
          apiMessage={apiResponse}
        />
        <ContactsListTitle />
        <AddButton
          toggleCreateNewContact={this.toggleCreateNewContact}
        />
        {
          creatingNewContact
            ? (
              <CreateNewContact
                toggleCreateNewContact={this.toggleCreateNewContact}
                createNewContact={createNewContact}
              />
            )
            : (
              <>
                <ContactsList {...this.props} isLoading={isLoading} />
                <PaginationBar {...this.props} isLoading={isLoading} />
              </>
            )
        }
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts,
  contactsCount: state.contacts.length,
  currentPage: state.pagination.currentPage,
  contactInEdit: state.contactInEdit,
  apiResponse: state.apiResponse
})

const mapDispatchToProps = dispatch => ({
  fetchAllContacts: () => dispatch(fetchContacts()),
  handlePageChange: page => dispatch(setCurrentPage(page)),
  setContactToEditState: contact => () => dispatch(setContactToEdit(contact)),
  resetContactToEditDefault: () => dispatch(resetContactToDefault()),
  setContactField: name => event => dispatch(setContactFields(name, event)),
  updateContactData: contact => () => dispatch(updateContact(contact)),
  createNewContact: contactData => () => dispatch(createContact(contactData)),
  deleteExisitingContact: contactId => () => dispatch(deleteContact(contactId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactsBookContainer)