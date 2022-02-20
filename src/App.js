import React, { Component } from "react";
import { nanoid } from "nanoid";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

import s from "./components/App.module.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  deleteСontact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  formAddContact = ({ name, number }) => {
    // console.log(name, number);

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    // console.log(contact);

    const foundContact = this.state.contacts.find(
      (prevContact) =>
        prevContact.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (foundContact) {
      alert(`${contact.name} is already in contacts!`);
    } else {
      this.setState((prevState) => ({
        contacts: [contact, ...prevState.contacts],
      }));
    }
  };

  contactFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { contacts, filter } = this.state;

    const totalContactCount = contacts.length;

    const visibleContacts = this.getVisibleContacts();

    return (
      <div className={s.PhoneBook__container}>
        <h1>Phonebook</h1>
        <ContactForm onSubmitContact={this.formAddContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChangeContact={this.contactFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteСontact={this.deleteСontact}
        />

        <div>
          <p>Number of contacts: {totalContactCount}</p>
        </div>
      </div>
    );
  }
}
export default App;
