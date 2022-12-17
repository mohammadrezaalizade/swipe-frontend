import React from "react";
import Filed from "../app/settings/Filed";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, Outlet } from "react-router-dom";

export type FormValues = {
  username: string;
  password: string;
};

const initialFormData = {
  username: "",
  password: "",
};

const FormSchema = Yup.object().shape({
  username: Yup.string().min(6, ""),
  password: Yup.string().min(6, ""),
});

const SingIn = () => {
  const formik = useFormik({
    initialValues: initialFormData,
    onSubmit: (values: any) => {
      console.log(values);
    },
    validationSchema: FormSchema,
    validateOnChange: false,
    validateOnBlur: true,
  });
  return (
    <div className="w-screen h-full lg:h-screen lg:min-h-full  bg-gray-50 flex flex-col justify-center items-center">
      <div className="bg-white w-full h-full lg:w-1/2 lg:max-w-[500px] lg:h-[55vh] lg:rounded-md lg:shadow-lg px-4 py-6 flex-col flex  gap-10">
        <h1 className="text-3xl text-gray-600 font-semibold">Sign in</h1>
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
          <Filed
            label="Username"
            name="username"
            placeHolder="Username"
            value={formik.values["username"]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.errors["username"] && formik.touched["username"]
                ? true
                : false
            }
          />
          <Filed
            label="Password"
            name="password"
            placeHolder="Password"
            value={formik.values["password"]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="password"
            error={
              formik.errors["password"] && formik.touched["password"]
                ? true
                : false
            }
          />
          <button
            type="button"
            className="w-full px-3 py-4 bg-blue-500 hover:bg-blue-500/90 transition duration-200 rounded-md font-semibold text-white mt-5 disabled:bg-blue-500/70 disabled:cursor-not-allowed"
          >
            Log in
          </button>
          <div className="flex gap-2">
            <p>You don't have an account ?</p>
            <Link
              to="/auth/sing-up"
              className="text-blue-500 hover:text-blue-400 font-medium transition-all duration-150 cursor-pointer hover:underline"
            >
              Click here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingIn;
