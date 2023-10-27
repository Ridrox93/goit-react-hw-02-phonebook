import { nanoid } from 'nanoid';
import css from './ContactList.module.css';

export const ContactList = props => {
  return (
    <>
      <h2 className={css.name}>Contacts</h2>
      <ul className={css.list}>
        {props.filteredContacts.map(contact => (
          <li className={css.item} key={nanoid()}>
            {contact.name} {contact.number}
            <button
              className={css.deleteButton}
              onClick={() => props.handleDeleteContact(contact.name)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
