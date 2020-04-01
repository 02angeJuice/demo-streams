import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends Component {
  componentDidMount = () => {
    this.props.fetchStream(this.props.match.params.id);
  };

  renderActions = () => {
    const id = this.props.stream ? this.props.stream.id : null;

    return (
      <>
        <button
          onClick={() => this.props.deleteStream(id)}
          className="ui negative button"
        >
          Delete
        </button>
        <Link to="/" className="ui blue inverted button">
          Cancel
        </Link>
      </>
    );
  };

  renderContent = () => {
    return !this.props.stream
      ? 'Are you sure want to delete this stream?'
      : `Are you sure want to delete this stream with title: ${this.props.stream.title}`;
  };

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, { deleteStream, fetchStream })(
  StreamDelete
);
