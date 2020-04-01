import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';

import StreamForm from './StreamForm';

class StreamEdit extends Component {
  componentDidMount = () => {
    this.props.fetchStream(this.props.match.params.id);
  };

  onEditSubmit = formValues => {
    this.props.editStream(this.props.stream.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading....</div>;
    }

    return (
      <>
        <h2 style={{ paddingLeft: '70px' }}>Edit Stream</h2>
        <StreamForm
          initialValues={_.pick(this.props.stream, 'title', 'description')}
          onSubmit={this.onEditSubmit}
        />
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
