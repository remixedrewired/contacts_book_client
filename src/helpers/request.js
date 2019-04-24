import axios from 'axios'
import { CONTACTS_BOOK_SERVER_URL } from '../config'

export const plainRequest = () => axios.create({
  baseURL: CONTACTS_BOOK_SERVER_URL
})