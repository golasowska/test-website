import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { sendFormData } from '../actions';

import swal from 'sweetalert';

class FormContact extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `text-center form group ${
      touched && error ? 'has-danger' : ''
    }`;
    return (
      <div className={className}>
        <input
          type="text"
          className="form-control"
          {...field.input}
          placeholder={field.label}
        />
        <div className="text-help">{touched ? error : ''}</div>
      </div>
    );
  }

  renderTextArea(field) {
    const { meta: { touched, error } } = field;
    const className = `text-center form group ${
      touched && error ? 'has-danger' : ''
    }`;
    return (
      <div className={className}>
        <textarea
          type="text"
          className="form-control message"
          {...field.input}
          placeholder={field.label}
        />
        <div className="text-help">{touched ? error : ''}</div>
      </div>
    );
  }

  onSubmit = values => {
    swal('Thanks for your message!', {
      buttons: false,
      timer: 2000
    });
    setTimeout(
      () => this.props.sendFormData(values, () => this.props.history.push('/')),
      2500
    );
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="col-sm-8 col-md-6">
        <div className="card">
          <div className="card-body">
            <form
              onSubmit={handleSubmit(this.onSubmit)}
              className="text-center"
            >
              <Field label="Name*" name="name" component={this.renderField} />
              <Field label="Email*" name="email" component={this.renderField} />
              <Field
                label="Message"
                name="message"
                component={this.renderTextArea}
              />
              <div className="row-button text-right">
                <button type="submit" className="btn btn-info">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.email) {
    errors.email = 'Please enter an email.';
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Please enter a correct email address.';
  }
  if (!values.name || values.name.length < 3) {
    errors.name = 'Please enter your name.';
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'ContactForm'
})(connect(null, { sendFormData })(FormContact));
