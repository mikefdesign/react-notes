import React, { Component } from 'react'
import { connect } from 'react-redux'
import { googleLogin, twitterLogin } from '../actions/userActions'

class Login extends Component {

  componentWillMount() {
    console.log('componentWillMount: ', this.props);

    if (this.props.user !== null) {
      this.props.history.push('/')
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps: ', nextProps);

    if (nextProps.user !== null) {
      nextProps.history.push('/')
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 jumbotron" style={{ marginTop: '-20px' }}>
            <h1>
              Diary | {new Date().getFullYear()}
            </h1>
            <h2>
              <i>Login with your favorite <strong>Social Network</strong> to start writing!</i>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">

            <button className="col-sm-6 btn btn-danger" onClick={this.props.googleLogin}>Login with Google</button>


            <button className="col-sm-6 btn btn-success info " onClick={this.props.twitterLogin}>Login with Twitter</button>

          </div>
        </div>
      </div>

    )
  }
}

function mapStatToProps(state, ownProps) {
  return {
    user: state.user
  }
}

export default connect(mapStatToProps, { googleLogin, twitterLogin })(Login)
