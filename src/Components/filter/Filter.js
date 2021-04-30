import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as contactsActions from '../../redux/contact/contact-actions';
import style from './Filter.module.css';
import { getFilter } from '../../redux/contact/contacts-selectors';

function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const onChange = useCallback(
    event => {
      dispatch(contactsActions.filterContact(event.target.value));
    },
    [dispatch],
  );

  return (
    <label>
      Find contacts by name
      <input
        className={style.inputFilter}
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
}

export default Filter;
