import React, { Component } from 'react'
import { connect } from 'react-redux'
// with 'withRouter' we have access to history
import { withRouter } from 'react-router-dom'
import { getUser } from '../actions/userActions'
import { getNotes } from '../actions/notesActions'

class LoadingComponent extends Component {
  componentWillMount() {
    const { userLoading, notesLoading } = this.props
    // have not loaded user, load
    if (userLoading === undefined) {
      this.props.getUser()
    }
    // have not tried to get note, load
    if (notesLoading === undefined) {
      this.props.getNotes()
    }
  }

  componentWillReceiveProps(nextProps) {
    // wait for user to get authenticated, try to load notes
    if (nextProps.notesLoading === -1 && nextProps.user !== null) {
      this.props.getNotes()
    }
  }

  render() {
    const { userLoading, notesLoading, children } = this.props
    /**
     * throughout the lifetime of app, user and notes loading status will 
     * keep toggling between true and false.
     * When anything other than toggling state, such as true or false,
     * that means the loading operation is settled and not active that time,
     * show the enclosing components. For everything else and in between show loading
     */
    if ((!userLoading && !notesLoading) || this.props.user === null) {
      return <div>{children}</div>
    }
    else {
      // return <div><h2>{children}</h2></div>
      return <div><h2>Loading...</h2></div>
    }
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    userLoading: state.loading.user,
    notesLoading: state.loading.notes,
  }
}

export default withRouter(
  connect(mapStateToProps, { getUser, getNotes })(LoadingComponent)
)
