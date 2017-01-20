import React from 'react'

const NumBtn = ({n, onClick}) => (
  <button onClick={onClick}>{n}</button>
)

NumBtn.propTypes ={
  onClick: PropsTypes.func.isRequired,
};

export default NumBtn
