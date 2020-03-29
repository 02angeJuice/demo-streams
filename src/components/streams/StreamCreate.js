import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import { Link } from 'react-router-dom';

class StreamCreate extends Component {
  renderError = ({ error, touched }) => {
    if (error && touched) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} type="text" autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <>
        <h2 style={{ paddingLeft: '70px' }}>Create Stream</h2>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
          style={{ maxWidth: '70%', margin: '0 auto' }}
        >
          <Field
            name="title"
            component={this.renderInput}
            label="Enter Title"
          />
          <Field
            name="description"
            component={this.renderInput}
            label="Enter Description"
          />

          <button className="ui button inverted green">Create</button>
          <Link className="ui button inverted blue right floated" to="/">
            Back
          </Link>
        </form>
      </>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

const formWrapped = reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
