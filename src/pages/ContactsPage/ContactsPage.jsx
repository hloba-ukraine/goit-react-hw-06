import Loader from "../../components/Loader/Loader";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import { useEffect } from "react";
import ModalDelete from "../../components/ModalDelete/ModalDelete";
import css from "./ContactPages.module.css";
import clsx from "clsx";
export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  const isModalOpen = useSelector((state) => state.contacts.isModalOpen);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
        {isLoading && <Loader />}
        {isError && <ErrorMessage />}
      </div>
      <div className={clsx(isModalOpen && css.backdrop)}>
        {isModalOpen && <ModalDelete />}
      </div>
    </div>
  );
}
