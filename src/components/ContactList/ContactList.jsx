import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
export default function ContactList() {
  const selectNameFilter = useSelector(selectFilteredContacts);

  return (
    <div>
      {selectNameFilter.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </div>
  );
}
