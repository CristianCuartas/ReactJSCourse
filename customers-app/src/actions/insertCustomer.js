import {INSERT_CUSTOMER} from './../constants';
import {createAction} from 'redux-actions';
import { apiPOST } from '../api';
import { urlCustomers } from '../api/urls';

export const insertCustomer = createAction(INSERT_CUSTOMER, 
   customer => apiPOST(urlCustomers, customer)());