import React, { PureComponent } from "react";
import { Formik } from "formik";
import DisplayRemoveBookForm from './DisplayRemoveBookForm'


const initialValues = {
    name: '',
};

export default class RemoveBookForm extends PureComponent {
  handleSubmit = formProps => {
    const { name} = formProps;
    let data = {
            name: name
    }
    // this.props.sent(data)
    console.log(data)
  };

  render = () => (
    <Formik
      initialValues={initialValues}
      onSubmit={this.handleSubmit}
      render={DisplayRemoveBookForm}
    />
  );
}