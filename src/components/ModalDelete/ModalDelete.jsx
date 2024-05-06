import { useDispatch, useSelector } from "react-redux";
import css from "./ModalDelete.module.css";
import { isModalClose } from "../../redux/contacts/slice";
import { deleteContact } from "../../redux/contacts/operations";
export default function ModalDelete() {
  const deleteId = useSelector((state) => state.contacts.deleteId);
  const dispatch = useDispatch();
  const modalClose = () => {
    dispatch(isModalClose());
  };
  return (
    <div className={css.modal}>
      <h3>Хотите удалить контакт ?</h3>
      <button
        onClick={() => {
          dispatch(deleteContact(deleteId));
          dispatch(isModalClose());
        }}
        type="button"
      >
        Yes{" "}
      </button>
      <button onClick={() => modalClose()} type="button">
        No{" "}
      </button>
    </div>
  );
}
