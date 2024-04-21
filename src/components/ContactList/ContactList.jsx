import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
export default function ContactList() {
  const selectContacts = useSelector((state) => state.contacts.items);
  const selectNameFilter = useSelector((state) => state.filters.name);
  const filterContacts = selectContacts.filter((contact) =>
    contact.name.toLowerCase().includes(selectNameFilter.toLowerCase())
  );
  return (
    <div>
      {filterContacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </div>
  );
}
