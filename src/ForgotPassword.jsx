import Button from "./Button";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

function ForgotPassword() {
  const callLoginApi = (values) => {
    console.log("callLoginApi called");
    console.log("sending data ", values.email);
  };

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
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
          Forgot Your Password
        </h1>
        <div>
          <label htmlFor="email-address" className="sr-only">
            Your Email address
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
            placeholder="Your Email address"
            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-200 px-3 py-2 text-gray-700 placeholder-gray-700 focus:z-10 focus:border-primary-default focus:outline-none focus:ring-primary-default sm:text-sm"
          />
        </div>
        {touched.email && errors.email && (
          <div className="text-primary-dark text-sm">{errors.email}</div>
        )}

        <Button type="submit" className="my-3" disabled={!dirty && !isValid}>
          request password reset
        </Button>
        <p className="self-center text-gray-700">
          Back to
          <Link to="/login">
            <span className="text-primary-dark font-bold"> Login</span>
          </Link>
        </p>
      </form>
    </div>
  );
}
export default ForgotPassword;
