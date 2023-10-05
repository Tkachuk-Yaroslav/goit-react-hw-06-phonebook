import ContactList from './ContactList/ContactList';
import PhonebookForm from './PhonebookForm/PhonebookForm';
// import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import Modal from './Modal/Modal';

// import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const App = () => {
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);
  // const [contacts, setContacts] = useState([
  // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]);
  // const [name, setName] = useState('');
  // const [filter, setFilter] = useState('');

  // const isFirstUseEffect = useRef(true);

  // useEffect(() => {
  //   //для того, щоб пропустить всі окрім першого разу
  //   if (!isFirstUseEffect.current) {
  //     return;
  //   }

  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   }

  //   isFirstUseEffect.current = false;
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = dataByForm => {
  //   console.log(dataByForm);

  //   const isExist = contacts.find(el => el.name === dataByForm.name);
  //   if (isExist)
  //     return Notify.failure(`${dataByForm.name} is already in contacts`);
  //   const newContact = {
  //     id: nanoid(),
  //     name: dataByForm.name,
  //     number: dataByForm.number,
  //   };
  //   // console.log(newContact);
  //   setContacts(prevContacts => [newContact, ...prevContacts]);
  // };

  // const deleteContact = contactId => {
  //   setContacts(contacts.filter(contact => contact.id !== contactId));
  // };

  // const findByFilted = event => {
  //   setFilter(event.currentTarget.value);
  // };

  // const enableContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );
  const filterContact = e => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    console.log(filteredContacts);
    return filteredContacts;
  };

  // return (
  //   <div>
  //     <h1>Phonebook</h1>
  //     <PhonebookForm onSubmit={addContact} />
  //     <h2>Contacts</h2>
  //     <Filter value={filter} onChange={findByFilted} />
  //     <ContactList contacts={enableContacts} onDeleteContact={deleteContact} />
  //   </div>
  // );
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '600px',
        marginTop: '50px',
        backgroundColor: '#58c800',
        borderRadius: '20px',
        padding: '40px 20px',
        outline: 'auto #280a0a00',
        outlineOffset: '-20px',
      }}
    >
      <h1>Phonebook</h1>
      <PhonebookForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList contacts={filterContact()} />
    </div>
  );
};

export default App;
