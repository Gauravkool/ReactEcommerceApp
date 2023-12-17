import Button from "./Button";
import { withFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Input from "./Input";

const callLoginApi = (values) => {
  console.log("callLoginApi called");
  console.log("sending data ", values.email);
};

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
});

const initialValues = {
  email: "",
};
export function ForgotPassword({
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
          Forgot Your Password
        </h1>

        <Input
          id="email-address"
          type="email"
          name="email"
          label="Your Email address"
          required
          values={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
          error={errors.email}
          touched={touched.email}
          autoComplete="email"
          placeholder="Your Email address"
          className="py-2"
        />

        <Button type="submit" className="my-3 py-2" disabled={!dirty && !isValid}>
          Request password reset
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

const myEnhancedForgotPassword = withFormik({
  initialValues: initialValues,
  validationSchema: schema,
  handleSubmit: callLoginApi,
});
export default myEnhancedForgotPassword(ForgotPassword);
