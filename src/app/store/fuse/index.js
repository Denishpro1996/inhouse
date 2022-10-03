import { combineReducers } from '@reduxjs/toolkit';
import dialog from './dialogSlice';
import message from './messageSlice';
import navbar from './navbarSlice';
import navigation from './navigationSlice';
import settings from './settingsSlice';
import add from '../FormSlice/addSlice'
import client from '../FormSlice/ClientSlice'
import Inquiry from '../FormSlice/InquirySlice';
import sales  from '../FormSlice/SalesSlice';
import postReducer from '../FormSlice/ApplicateUpdate'

 const fuseReducers = combineReducers({
  navigation,
  settings,
  navbar,
  message,
  dialog,
  add,
  client,
  Inquiry,
  sales,
  postReducer
});

export default fuseReducers;
