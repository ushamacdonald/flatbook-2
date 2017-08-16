import React from 'react'
import {connect} from 'react-redux'
import NoticeBoardAdd from './NoticeBoardAdd'
import {HashRouter as Router, Route} from 'react-router-dom'


const NoticeBoard = ({noticeboard}) => {
  return (
    <div className="column is-half">
      <h1 className="title is-3">Notice Board</h1>
      {noticeboard.map((noticeboard, key) => {
        return <div key={key}>
          {noticeboard.message}
        </div>
      })}
      <Route exact path="/flats/:flat_id" component={(props) => <NoticeBoardAdd {...props} />} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    noticeboard: state.noticeboard
  }
}

export default connect(mapStateToProps)(NoticeBoard)
