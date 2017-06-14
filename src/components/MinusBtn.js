import React, { PropTypes } from 'react'

export const MinusBtn = ({ onClick }) => (
  <button onClick={ onClick }>-</button>
)

MinusBtn.PropTypes = {
  onClick: PropTypes.func.isRequired,
}
