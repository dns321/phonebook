import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import contactsOperations from '../../redux/contact/contact-operations';
import style from './ContactForm.module.css';
import { getLoading } from '../../redux/contact/contacts-selectors';
import { getContactName } from '../../redux/contact/contacts-selectors';
import Loader from '../loader/Loader';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const loadingConntacts = useSelector(getLoading);
  const names = useSelector(getContactName);

  const onSubmit = useCallback(
    data => {
      dispatch(contactsOperations.addContact(data));
    },
    [dispatch],
  );

  useEffect(() => {
    dispatch(contactsOperations.fetchContact());
  }, [dispatch]);

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.warn(`Type input name- ${name} not exist`);
    }
  };

  const checkUniqueContact = name => {
    const findeContact = !names.find(contact => contact === name);
    return findeContact;
  };

  const handleSubmit = event => {
    event.preventDefault();
    checkUniqueContact(name);

    if (name !== '') {
      if (!checkUniqueContact(name)) {
        alert(`'${name} isalready in contacts'`);
        return;
      } else {
        onSubmit({ name: name, number: number });
        reset();
      }
      return;
    }
    alert('Enter the name and number');
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={style.formStyle}>
        <label>
          Name
          <input
            className={style.inputStyle}
            type="text"
            name="name"
            placeholder="Enter name"
            value={name}
            onChange={handleChange}
          ></input>
        </label>

        <label>
          Number
          <input
            className={style.inputStyle}
            type="tel"
            name="number"
            placeholder="Enter phone namber"
            value={number}
            onChange={handleChange}
          ></input>
        </label>

        <button type="submit">Add contact</button>
      </form>
      {loadingConntacts && <Loader />}
    </>
  );
}

export default ContactForm;
