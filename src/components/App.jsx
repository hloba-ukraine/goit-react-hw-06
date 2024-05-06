import { Routes, Route } from "react-router-dom";
import { Suspense, useEffect } from "react";
import HomePage from "../pages/HomePage";
import RegistrationPage from "../pages/RegistrationPage";
import LoginPage from "../pages/LoginPage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import Layout from "./ Layout/ Layout";
import Loader from "./Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../redux/auth/operations";
import RestrictedRoute from "./RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import { selectIsLoading, selectIsError } from "../redux/auth/selectors";
import ErrorMessage from "./ErrorMessage/ErrorMessage";

export default function App() {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <Layout>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/register"
                element={
                  <RestrictedRoute>
                    <RegistrationPage />
                  </RestrictedRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute>
                    <LoginPage />
                  </RestrictedRoute>
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute>
                    <ContactsPage />
                  </PrivateRoute>
                }
              />
              {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Routes>
          </Suspense>
        </Layout>
      )}
      {isError && <ErrorMessage />}
    </div>
  );
}
