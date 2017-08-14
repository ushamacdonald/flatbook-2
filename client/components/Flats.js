import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getFlats} from '../actions/flats'

const renderFlat = (flat, key) => (
  <Link to={'/flats/' + flat.flat_id}><h1 key={key}>{flat.flat_name}</h1></Link>
)

const Flats = ({flats, dispatch}) => (
  <div>
    <button onClick={() => dispatch(getFlats())}>Show Flats</button>
    {flats.map(renderFlat)}
  </div>
)

const mapStateToProps = (state) => {
  return {flats: state.flats}
}

export default connect(mapStateToProps)(Flats)
