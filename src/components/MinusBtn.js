import React, { PropTypes } from 'react'

const MinusBtn = ({ onClick }) => (
  <button onClick={ onClick }>-</button>
)

MinusBtn.PropTypes ={
  onClick: PropTypes.func.isRequired,
}

export default MinusBtn
