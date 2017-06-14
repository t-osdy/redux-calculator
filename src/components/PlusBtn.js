import React, { PropTypes } from 'react'

export const PlusBtn = ({ onClick }) => (
  <button onClick={ onClick }>+</button>
)

PlusBtn.PropTypes = {
  onClick: PropTypes.func.isRequired,
}