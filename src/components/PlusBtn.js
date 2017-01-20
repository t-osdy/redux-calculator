import React from 'react'

const PlusBtn = () => (
  <button onClick={ onClick }>+</button>
)

PlusBtn.PropsTypes = {
  onClick: PropsTypes.func.isRequired,
}

export default PlusBtn
