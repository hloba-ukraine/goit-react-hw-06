import Loader from "../components/Loader/Loader";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from "../redux/contacts/selectors";
import { fetchContacts } from "../redux/contacts/operations";
import { useEffect } from "react";
export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
    </div>
  );
}
