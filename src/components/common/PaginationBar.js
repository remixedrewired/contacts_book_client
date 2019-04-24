import React, { Component } from 'react'
import Pagination from 'react-js-pagination'
import styled from 'styled-components'

import theme from '../../theme'

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-image: linear-gradient(to top, ${theme.colors.lemon}, ${theme.colors.ligthblue});
  
  ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    width: 100%;
    padding: 0;

    li {
      margin: 0 7px;

      a {
        color: ${theme.colors.deepgreen};
        text-decoration: none;
      }
    }

    .active {
      text-decoration: underline;
    }
  }
`

class PaginationBar extends Component {
  render() {
    const {
      contacts,
      isLoading,
      currentPage = 0,
      handlePageChange,
      contactsCount = 0
    } = this.props

    return (
      <PaginationWrapper>
        {
          (!isLoading && contacts.length && contacts.length > 10) &&
          (
            <Pagination
              pageRangeDisplayed={3}
              itemsCountPerPage={10}
              activePage={currentPage}
              onChange={handlePageChange}
              totalItemsCount={contactsCount}
            />
          )
        }
      </PaginationWrapper>
    )
  }
}

export default PaginationBar