import React, { PropTypes } from 'react'

export const NumBtn = ({n, onClick}) => (
  <button onClick={onClick}>{n}</button>
)

NumBtn.PropTypes = {
  onClick: PropTypes.func.isRequired,
}