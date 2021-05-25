import React from "react";
import { Form, Field } from "formik";
import {AntInput, AntTextArea} from "./CreateAntFields";
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
    <Field
      component={AntInput}
      name="author"
      type="author"
      placeholder="Автор"
      validate={validateInput}
      submitCount={submitCount}
      hasFeedback
    />
    <Field
      component={AntInput}
      name="picture"
      type="picture"
      placeholder="Изображение"
      validate={validateInput}
      submitCount={submitCount}
      hasFeedback
    />
    
     <Field
      component={AntInput}
      name="city"
      type="city"
      placeholder="Город"
      validate={validateInput}
      submitCount={submitCount}
      hasFeedback
    />
    <Field
      component={AntInput}
      name="genre"
      type="genre"
      placeholder="Жанр"
      validate={validateInput}
      submitCount={submitCount}
      hasFeedback
    />
    <Field
      component={AntInput}
      name="country"
      type="country"
      placeholder="Страна"
      validate={validateInput}
      submitCount={submitCount}
      hasFeedback
    />
    <Field
      component={AntTextArea}
      name="description"
      type="description"
      placeholder="Описание"
      validate={validateInput}
      submitCount={submitCount}
      hasFeedback
    />
    <div className="submit-container">
      <button className="ant-btn ant-btn-primary" type="submit">
        Добавить
      </button>
    </div>
  </Form>
);