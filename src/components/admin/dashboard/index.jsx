import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function index(props) {
  let login = props.login ? <div>Home</div>:<div>Please login</div>
  console.log(props);
  return (
    <Box>{login}</Box>
  )
}

export default index