import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

import StreamForm from './StreamForm';

class StreamCreate extends Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <>
        <h2 style={{ paddingLeft: '70px' }}>Create a Stream</h2>
        <StreamForm onSubmit={this.onSubmit} />
      </>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
