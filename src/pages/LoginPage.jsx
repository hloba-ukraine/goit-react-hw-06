import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";

import * as Yup from "yup";
import { login } from "../redux/auth/operations";
const INITIAL_FORM_VALUES = {
  email: "",
  password: "",
};

const loginUserSchema = Yup.object({
  email: Yup.string()
    .email("You must enter valid email adress")
    .required("Required"),
  password: Yup.string().required("Required").min(7, "Too Short!"),
});
export default function LoginPage() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(login(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={INITIAL_FORM_VALUES}
      onSubmit={handleSubmit}
      validationSchema={loginUserSchema}
    >
      <Form>
        <h2>Login User</h2>

        <label>
          <span>Email</span>
          <br />
          <Field
            type="email"
            name="email"
            placeholder="Enter your email"
            autoComplete="true"
          />
          <ErrorMessage component="p" name="email" />
        </label>
        <br />
        <label>
          <span>Password</span>
          <br />
          <Field
            type="password"
            name="password"
            placeholder="Enter your password"
            autoComplete="true"
          />
          <ErrorMessage component="p" name="password" />
        </label>
        <br />
        <button type="submit">Log in account</button>
      </Form>
    </Formik>
  );
}
