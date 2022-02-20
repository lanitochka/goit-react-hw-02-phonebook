import React from "react";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteСontact }) => (
  <ul className={s.ContactList}>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        {name}
        <span>{number}</span>
        <button onClick={() => onDeleteСontact(id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default ContactList;
