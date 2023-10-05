import { configureStore } from '@reduxjs/toolkit';
// import { reducer } from './reducer';
import { contactSlice } from './contacts/contactsSlice';
import { filterSlice } from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactSlice.reducer,
    filter: filterSlice.reducer,
  },
});
