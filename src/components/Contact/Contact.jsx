import React from 'react';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsSlice';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <h2 className={css.title}>{name}</h2>
      <h2 className={css.number}>{number}</h2>
      <button
        className={css.delete}
        onClick={() => {
          dispatch(deleteContact(id));
        }}
        type="button"
      >
        Delete
      </button>
    </>
  );
};