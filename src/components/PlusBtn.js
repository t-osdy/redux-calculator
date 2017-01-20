import React, { PropsTypes } from 'react'

const PlusBtn = ({ onClick }) => (
  <button onClick={ onClick }>+</button>
)

PlusBtn.PropsTypes = {
  onClick: PropsTypes.func.isRequired,
}

export default PlusBtn
