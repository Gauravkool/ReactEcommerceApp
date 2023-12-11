import Button from "./Button";
import { withFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Input from "./Input";
const callLoginApi = (values) => {
  console.log("callLoginApi called");
  console.log("sending data ", values.email, values.password);
};

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
});

const initialValues = {
  email: "",
  password: "",
};
export function Login({
  handleChange,
  values,
  handleSubmit,
  handleBlur,
  errors,
  touched,
  isValid,
  dirty,
}) {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-96 p-5 rounded-md shadow-md bg-white">
        <h1 className="text-2xl font-semibold text-gray-700 font-serif self-center mb-4">
          Login to MyKart
        </h1>

        <Input
          id="email-address"
          type="email"
          name="email"
          label="Email address"
          required
          touched={touched.email}
          error={errors.email}
          values={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
          autoComplete="email"
          placeholder="Email address"
          className="rounded-b-none"
        />
        <Input
          id="password"
          type="password"
          name="password"
          label="Password"
          required
          touched={touched.password}
          error={errors.password}
          values={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
          autoComplete="password"
          placeholder="Password"
          className="rounded-t-none"
        />

        <Button type="submit" className="my-3" disabled={!dirty && !isValid}>
          Login
        </Button>
        <p className="self-center text-gray-700">
          Don't have an account?
          <Link to="/signup">
            <span className="text-primary-dark font-bold"> Signup</span>
          </Link>
        </p>
      </form>
    </div>
  );
}

const myEnhancedLogin = withFormik({
  initialValues: initialValues,
  validationSchema: schema,
  handleSubmit: callLoginApi,
});
export default myEnhancedLogin(Login);
