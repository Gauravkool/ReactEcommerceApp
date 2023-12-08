import Button from "./Button";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
function Login() {
  const callLoginApi = (values) => {
    console.log("callLoginApi called");
    console.log("sending data ", values.email, values.password);
  };

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
  });
  const {
    handleChange,
    values,
    handleSubmit,
    handleBlur,
    errors,
    touched,
    isValid,
    dirty,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: callLoginApi,
    validationSchema: schema,
  });

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-96 p-5 rounded-md shadow-md bg-white">
        <h1 className="text-2xl font-semibold text-gray-700 font-serif self-center mb-4">
          Login to MyKart
        </h1>
        <div>
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            type="email"
            name="email"
            required
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            autoComplete="email"
            placeholder="Email address"
            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-200 px-3 py-2 text-gray-700 placeholder-gray-700 focus:z-10 focus:border-primary-default focus:outline-none focus:ring-primary-default sm:text-sm"
          />
        </div>
        {touched.email && errors.email && (
          <div className="text-primary-dark text-sm">{errors.email}</div>
        )}
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            required
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            autoComplete="password"
            placeholder="Password"
            className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-200 px-3 py-2 text-gray-700 placeholder-gray-700 focus:z-10 focus:border-primary-default focus:outline-none focus:ring-primary-default sm:text-sm"
          />
        </div>
        {touched.password && errors.password && (
          <div className="text-primary-dark text-sm">{errors.password}</div>
        )}
        <Button
          type="submit"
          className="my-3"
          disabled={!dirty && !isValid}>
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
export default Login;
