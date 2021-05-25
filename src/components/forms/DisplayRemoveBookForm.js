import React from "react";
import { Form, Field } from "formik";
import {AntInput} from "./CreateAntFields";
import {validateInput} from "./ValidateFields";

export default ({ handleSubmit, values, submitCount }) => (
  <Form className="form-container" onSubmit={handleSubmit}>
    <Field
      component={AntInput}
      name="name"
      type="name"
      placeholder="Название"
      validate={validateInput}
      submitCount={submitCount}
      hasFeedback
    />
    <div className="submit-container">
      <button className="ant-btn ant-btn-primary" type="submit">
        Удалить
      </button>
    </div>
  </Form>
);