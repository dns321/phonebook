import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import contactsOperations from '../../redux/contact/contact-operations';
import { getVisibleContacts } from '../../redux/contact/contacts-selectors';
import style from './ContactList.module.css';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);

  const deleteContact = event => {
    const id = event.target.dataset.id;
    dispatch(contactsOperations.deleteContact(id));
  };

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={style.itemContact}>
          <p>
            {name}: {number}
            <button
              className={style.itemContactBtn}
              type="button"
              onClick={deleteContact}
              data-id={id}
            >
              Delete
            </button>
          </p>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
