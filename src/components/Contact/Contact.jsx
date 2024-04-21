import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";
export default function Contact({ contact }) {
  const dispatch = useDispatch();
  return (
    <>
      <p>🙎🏼‍♂️{contact.name}</p>
      <p>📱{contact.number}</p>

      <button type="button" onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </button>
    </>
  );
}
