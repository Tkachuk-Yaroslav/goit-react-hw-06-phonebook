import { Contact } from 'components/Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  return (
    <ol>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.item}>
            <Contact
              name={name}
              number={number}
              id={id}
            />
          </li>
        );
      })}
    </ol>
  );
};


export default ContactList;
