import React from "react";
import { Form, Field } from "formik";
import {AntInput, AntInputPassword} from "./CreateAntFields";
import {validateEmail, validateInput} from "./ValidateFields";

export default ({ handleSubmit, values, submitCount}) => (
  <Form className="form-container" onSubmit={handleSubmit}>
    <Field
      component={AntInput}
      name="email"
      type="email"
      placeholder="Email"
      validate={validateEmail}
      submitCount={submitCount}
      hasFeedback
    />
    
     <Field
      component={AntInputPassword}
      name="password"
      type="password"
      placeholder="Пароль"
      validate={validateInput}
      submitCount={submitCount}
      hasFeedback
    />
    <div style={{display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
      <button className="ant-btn ant-btn-primary " type="submit">
        Войти
      </button>
    </div>
  </Form>
);