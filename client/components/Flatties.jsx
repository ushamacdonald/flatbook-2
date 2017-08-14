import React from 'react'
import {connect} from 'react-redux'


const renderFlatties = (flattie, key) => {
  return <li key={key}>{flattie.name}</li>
}

const Flatties = ({flatties, dispatch}) => {
  return (
    <div className="column">
      <ul>
        {flatties.map(renderFlatties)}
      </ul>
    </div>
  )
}

const mapStateToProps = ({flatties}) => {
  return {flatties}
}

export default connect(mapStateToProps)(Flatties)
