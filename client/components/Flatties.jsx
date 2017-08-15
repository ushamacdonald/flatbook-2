import React from 'react'
import {connect} from 'react-redux'


const renderFlatties = (flattie, key) => {
  return <div className="column" key={key}><h1 className="title is-3">{flattie.name}</h1> <p>{flattie.description}</p> <img src={flattie.image} /></div>
}

const Flatties = ({flatties, dispatch}) => {
  return (
    <div className="column is-7 box">
        <div className="columns">{flatties.map(renderFlatties)}</div>
    </div>
  )
}

const mapStateToProps = ({flatties}) => {
  return {flatties}
}

export default connect(mapStateToProps)(Flatties)
