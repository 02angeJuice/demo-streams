import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreams, deleteStream } from '../../actions';

import { Link } from 'react-router-dom';

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  onClicked = id => {
    console.log('clicked', id);
  };

  onDelete = id => {
    this.props.deleteStream(id);
  };

  renderAdmin = stream => {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <button className="ui tiny blue inverted button">Edit</button>
          <button
            onClick={() => this.onDelete(stream.id)}
            className="ui tiny red inverted button"
          >
            Delete
          </button>
        </div>
      );
    }
  };

  renderList = () => {
    return this.props.streams.map(stream => {
      return (
        <div
          onClick={() => this.onClicked(stream.id)}
          className="item"
          key={stream.id}
        >
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera"></i>
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  };

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ marginTop: '25px' }}>
          <Link className="ui green button right floated" to="/streams/new">
            Create Stream
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <>
        <h2 style={{ paddingLeft: '70px' }}>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, { fetchStreams, deleteStream })(
  StreamList
);
