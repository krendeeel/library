import React from "react";
import { Form, Field } from "formik";
import {AntInput, AntInputPassword} from "./CreateAntFields";
import {validateEmail, validateInput} from "./ValidateFields";

export default ({ handleSubmit, values, submitCount }) => (
  <Form className="form-container" onSubmit={handleSubmit}>
    <Field
      component={AntInput}
      name="firstName"
      type="firstName"
      placeholder="Имя"
      validate={validateInput}
      submitCount={submitCount}
      hasFeedback
    />
    <Field
      component={AntInput}
      name="lastName"
      type="lastName"
      placeholder="Фамилия"
      validate={validateInput}
      submitCount={submitCount}
      hasFeedback
    />
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
    <div className="submit-container">
      <button className="ant-btn ant-btn-primary" type="submit">
        Зарегистрироваться
      </button>
    </div>
  </Form>
);