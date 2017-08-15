import React from 'react'
import {connect} from 'react-redux'


class NoticeBoardAdd extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {
    return (
      <form>
        <div className="field">
          <div className="control">
            <input className="input" type="text" name="message" />
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
  noticeboard: state.noticeboard
}

export default connect(mapStateToProps)(NoticeBoardAdd)
