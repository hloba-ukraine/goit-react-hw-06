import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
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
