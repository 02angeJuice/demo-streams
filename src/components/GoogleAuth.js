import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {
  state = { user: undefined };
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '457286253388-4ssvgasrt40qjhg9sqd83ceap08p8bo4.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());

          this.auth.isSignedIn.listen(this.onAuthChange);

          if (this.props.isSignedIn) {
            this.setState({
              user: this.auth.currentUser.get().getBasicProfile()
            });
          }
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton = () => {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      if (this.state.user) {
        return (
          <div className="ui simple dropdown item">
            <img src={this.state.user.getImageUrl()} alt="" />
            &nbsp;&nbsp;&nbsp;
            <span className="text">{this.state.user.getName()}</span>
            <i className="dropdown icon"></i>
            <div className="menu">
              <div className="item">
                <i className="edit outline icon"></i>
                Your Profile
              </div>
              <div className="item">
                <i className="question circle outline icon"></i>
                Help
              </div>
              <div onClick={this.onSignOutClick} className="item">
                <i className="sign-out alternate icon"></i>
                Sign Out
              </div>
            </div>
          </div>
        );
      }
    } else {
      return (
        <div className="item">
          <div
            onClick={this.onSignInClick}
            className="ui secondary animated button"
          >
            <div className="visible content">
              <i className="sign-in icon"></i>
              &nbsp;&nbsp;Sign In
            </div>
            <div className="hidden content">
              <i className="red google icon"></i>
              with Google
            </div>
          </div>
        </div>
      );
    }
  };

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapState = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapState, { signIn, signOut })(GoogleAuth);
