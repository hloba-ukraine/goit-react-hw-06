import { useDispatch } from "react-redux";

import { deleteId, isModalOpen } from "../../redux/contacts/slice";
export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const openModal = (id) => {
    dispatch(deleteId(id));
    dispatch(isModalOpen());
  };
  return (
    <>
      <p>🙎🏼‍♂️{contact.name}</p>
      <p>📱{contact.number}</p>

      <button type="button" onClick={() => openModal(contact.id)}>
        Delete
      </button>
    </>
  );
}
