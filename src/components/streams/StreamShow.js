import React, { Component } from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  componentDidMount = () => {
    this.props.fetchStream(this.props.match.params);
    this.buildPlayer();
  };

  componentDidUpdate = () => {
    this.buildPlayer();
  };

  componentWillUnmount = () => {
    if (this.player) {
      this.player.destroy();
    }
  };

  buildPlayer = () => {
    if (this.player || !this.props.stream) {
      return null;
    }

    const { id } = this.props.match.params;

    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`
    });

    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  };

  renderStream = () => {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    const { title, description } = this.props.stream;

    return (
      <div>
        <video
          ref={this.videoRef}
          style={{ width: '100%' }}
          autoPlay
          muted
          controls
        ></video>
        <h1>{title}</h1>

        <h5>{description}</h5>
      </div>
    );
  };

  render() {
    return <>{this.renderStream()}</>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
