import React from 'react'
import {connect} from 'react-redux'

const NoticeBoard = ({noticeboard}) => {
  return (
    <div className="column is-half">
      <h1 className="title is-3">Notice Board</h1>
      {noticeboard.map((noticeboard, key) => {
        return <div key={key}>
          {noticeboard.message}
        </div>
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    noticeboard: state.noticeboard
  }
}

export default connect(mapStateToProps)(NoticeBoard)
