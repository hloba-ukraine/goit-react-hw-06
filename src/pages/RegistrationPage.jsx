import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";

import * as Yup from "yup";
import { register } from "../redux/auth/operations";
const INITIAL_FORM_VALUES = {
  name: "",
  email: "",
  password: "",
};

const registerUserSchema = Yup.object({
  name: Yup.string()
    .required("Required")
    .min(3, "Too Short!")
    .max(38, "Too Long!"),
  email: Yup.string()
    .email("You must enter valid email adress")
    .required("Required"),
  password: Yup.string().required("Required").min(7, "Too Short!"),
});
export default function RegistrationPage() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={INITIAL_FORM_VALUES}
      onSubmit={handleSubmit}
      validationSchema={registerUserSchema}
    >
      <Form>
        <h2>Register User</h2>
        <label>
          <span>Name</span>
          <br />
          <Field
            type="text "
            name="name"
            placeholder="Enter your name"
            autoComplete="true"
          />
          <br />
          <ErrorMessage component="p" name="name" />
        </label>
        <br />
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
        <button type="submit">Registration</button>
      </Form>
    </Formik>
  );
}
