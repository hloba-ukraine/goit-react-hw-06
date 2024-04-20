// import { useEffect, useState } from "react";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import { addContact, deleteContact } from "../redux/contactsSlice.js";
import { changeFilter } from "../redux/filtersSlice.js";

export default function App() {
  const dispatch = useDispatch();
  const selectContacts = useSelector((state) => state.contacts.items);
  const selectNameFilter = useSelector((state) => state.filters.name);

  const OnDeleteContact = (event) => {
    const actions = deleteContact(event);
    dispatch(actions);
  };
  const onAddContact = (formData) => {
    const finalContact = {
      ...formData,
      id: nanoid(),
    };
    const actions = addContact(finalContact);
    dispatch(actions);
  };

  const onChangeFilter = (event) => {
    const actions = changeFilter(event.target.value);
    dispatch(actions);
  };
  const filterContacts = selectContacts.filter((contact) =>
    contact.name.toLowerCase().includes(selectNameFilter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox value={selectNameFilter} onChangeFilter={onChangeFilter} />
      <ContactList
        contacts={filterContacts}
        OnDeleteContact={OnDeleteContact}
      />
    </div>
  );
}
