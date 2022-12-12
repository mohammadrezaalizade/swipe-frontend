import { Form, Formik, useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import Filed from "./Filed";

export type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const FormSchema = Yup.object().shape({
  email: Yup.string().matches(
    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    "Please Enter a valid E-mail"
  ),
  password: Yup.string().min(6, "Password must be bigger than 6 words"),
  firstName: Yup.string(),
  lastName: Yup.string(),
});

const Account = () => {
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
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3 mt-4">
      <Filed
        label="First name"
        name="firstName"
        placeHolder="First name"
        value={formik.values["firstName"]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.errors["firstName"] && formik.touched["firstName"]
            ? true
            : false
        }
      />
      <Filed
        label="Last name"
        name="lastName"
        placeHolder="Last name"
        value={formik.values["lastName"]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.errors["lastName"] && formik.touched["lastName"] ? true : false
        }
      />
      <Filed
        label="Email Address"
        name="email"
        placeHolder="Email Address"
        value={formik.values["email"]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors["email"] && formik.touched["email"] ? true : false}
      />
      <Filed
        label="Password"
        name="password"
        placeHolder="Password"
        value={formik.values["password"]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.errors["password"] && formik.touched["password"] ? true : false
        }
      />
      <button
        type="button"
        className="w-full px-3 py-4 bg-blue-500 hover:bg-blue-500/90 transition duration-200 rounded-md font-semibold text-white mt-5 disabled:bg-blue-500/70 disabled:cursor-not-allowed"
      >
        Save settings
      </button>
    </form>
  );
};

export default Account;
