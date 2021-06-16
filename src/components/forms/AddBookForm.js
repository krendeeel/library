import React, { PureComponent } from "react";
import { Formik } from "formik";
import DisplayAddBookForm from './DisplayAddBookForm'


const initialValues = {
    name: '',
    author: '',
    picture: '',
    city: '',
    genre: '',
    country: '',
    description: ''
};

export default class AddBookForm extends PureComponent {
  handleSubmit = formProps => {
    const { name, author, picture, city, genre, country, description} = formProps;
    let data = {
            name: name,
            author: author,
            picture: picture,
            city: city,
            genre: genre,
            country: country,
            description: description,
            reservation: false
    }
    this.props.send(data)
  };

  render = () => (
    <Formik
      initialValues={initialValues}
      onSubmit={this.handleSubmit}
      render={DisplayAddBookForm}
    />
  );
}