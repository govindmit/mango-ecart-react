import React from 'react'

function index(props) {
  let login = props.login ? <div>Home</div>:<div>Please login</div>
  console.log(props);
  return (
    <h1>{login}</h1>
  )
}

export default index