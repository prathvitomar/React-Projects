import { useFormik } from "formik";
import React from "react";
import practiceSchema from "../schemas/practiceYup";

function FormikAndYup() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const { values, errors, touched, handleBlur, handleSubmit, handleChange } = useFormik({
    initialValues: initialValues,
    validationSchema : practiceSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          value={values.name}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.name && touched.name ? <p>{errors.name}</p> : null}
        <input
          type="email"
          name="email"
          id="email"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.email && touched.email ? <p>{errors.email}</p> : null}
        <input
          type="password"
          name="password"
          id="password"
          value={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.password && touched.password ? <p>{errors.password}</p> : null}
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={values.confirmPassword}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.confirmPassword && touched.confirmPassword ? (
          <p>{errors.confirmPassword}</p>
        ) : null}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default FormikAndYup;
