import React, { PropTypes } from 'react'

const PlusBtn = ({ onClick }) => (
  <button onClick={ onClick }>+</button>
)

PlusBtn.PropTypes = {
  onClick: PropTypes.func.isRequired,
}

export default PlusBtn
