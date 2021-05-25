import React from "react";
import { Formik } from "formik";
import DisplayBookingForm from "./DisplayBookingForm";

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
};

export const BookingForm = (props) => {
  const handleSubmit = formProps => {
    const { firstName, lastName, email, password } = formProps;
    let data = {
            firstname: firstName,
            lastname: lastName,
            email: email,
            password: password
    }
    props.send(data)
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      render={DisplayBookingForm}
    />
  );
}


