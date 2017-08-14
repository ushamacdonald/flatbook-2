import React from 'react'
import {connect} from 'react-redux'


const renderFlatties = (flattie, key) => {
  return <li>{flattie.name}</li>
}

const Flatties = ({flatties, dispatch}) => {
  return (
    <div>
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
