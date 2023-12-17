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
  fullName: Yup.string().required(),
  userName: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
  confirmPassword: Yup.string().min(8).required(),
});

const initialValues = {
  fullName: "",
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export function Signup({
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
          Signup to MyKart
        </h1>

        <Input
          id="fullName"
          type="text"
          name="fullName"
          label="Full Name"
          required
          values={values.fullName}
          onBlur={handleBlur}
          onChange={handleChange}
          touched={touched.fullName}
          error={errors.fullName}
          autoComplete="fullName"
          placeholder="Full Name"
          className="rounded-b-none py-2"
        />

        <Input
          id="userName"
          type="text"
          name="userName"
          label="User Name"
          required
          values={values.userName}
          onBlur={handleBlur}
          onChange={handleChange}
          touched={touched.userName}
          error={errors.userName}
          autoComplete="userName"
          placeholder="User Name"
          className="rounded-none py-2"
        />

        <Input
          id="email-address"
          type="email"
          name="email"
          label="Email address"
          required
          values={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
          touched={touched.email}
          error={errors.email}
          autoComplete="email"
          placeholder="Email address"
          className="rounded-none py-2"
        />

        <Input
          id="password"
          type="password"
          name="password"
          label="Password"
          required
          values={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
          touched={touched.password}
          error={errors.password}
          autoComplete="password"
          placeholder="Password"
          className="rounded-none py-2"
        />

        <Input
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          required
          values={values.confirmPassword}
          onBlur={handleBlur}
          onChange={handleChange}
          touched={touched.confirmPassword}
          error={errors.confirmPassword}
          autoComplete="confirmPassword"
          placeholder="Confirm Password"
          className="rounded-t-none py-2"
        />

        <Button type="submit" className="my-5 py-2" disabled={!dirty && !isValid}>
          Signup
        </Button>
        <p className="self-center text-gray-700">
          Already have an account?
          <Link to="/login">
            <span className="text-primary-dark font-bold"> Login</span>
          </Link>
        </p>
      </form>
    </div>
  );
}

const myEnhancedSignup = withFormik({
  initialValues: initialValues,
  validationSchema: schema,
  handleSubmit: callLoginApi,
});
export default myEnhancedSignup(Signup);
