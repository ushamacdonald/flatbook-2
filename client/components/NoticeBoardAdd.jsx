import React from 'react'
import {connect} from 'react-redux'
import {postNoticeboard} from '../actions/noticeboard'

class NoticeBoardAdd extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newMessage: {flat_id: props.match.params.flat_id}
    }
  }

updateMessage(e) {
  let newMessage = this.state.newMessage
  newMessage[e.target.name] = e.target.value
  this.setState({newMessage})
}

addMessage(e) {
  e.preventDefault()
  this.props.dispatch(postNoticeboard(this.state.newMessage))
}

  render() {
    return (
      <form onSubmit={this.addMessage.bind(this)}>
        <div className="field">
          <div className="control">
            <input onChange={this.updateMessage.bind(this)} className="input" type="text" name="message" />
          </div>
        </div>
        <div className="field">
          <div className="control">
          <input className="button is-primary" type="submit" value="add message" />
          </div>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    noticeboard: state.noticeboard
  }
}

export default connect(mapStateToProps)(NoticeBoardAdd)
