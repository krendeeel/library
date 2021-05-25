import React, { PureComponent } from "react";
import { Formik } from "formik";
import DisplayLoginForm from "./DisplayLoginForm";
import { loginUserThunk } from './../../redux/store';


const initialValues = {
  email: "",
  password: ""
};

export const LoginForm = (props) => {
    
     const handleSubmit = formProps => {
        const { email, password } = formProps;
        let data = {"email": email,"password": password}
        props.send(data)
    };
  
    return (
      <div>
         <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          render={DisplayLoginForm}
        />  
      </div>
    )
  
  }