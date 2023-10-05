import ContactList from './ContactList/ContactList';
import PhonebookForm from './PhonebookForm/PhonebookForm';
import Filter from './Filter/Filter';
// import Modal from './Modal/Modal';

import { useSelector } from 'react-redux';
//так як використовується redux-rersist, то useEffect не потрібен для зберігання в локал сторедж

const App = () => {
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);

  const filterContact = e => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    console.log(filteredContacts);
    return filteredContacts;
  };

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
