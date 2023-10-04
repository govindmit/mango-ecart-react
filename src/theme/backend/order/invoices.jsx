import React from 'react'
import { Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

function invoices() {
  return (
    <Paper>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Invoice Date</TableCell>
          <TableCell>Order ID</TableCell>
          <TableCell>Customer Name</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>29</TableCell>
          <TableCell>Sep 5, 2023, 7:11:55 PM</TableCell>
          <TableCell>406</TableCell>
          <TableCell>Keely Cooke</TableCell>
          <TableCell>$78.00 $</TableCell>
          <TableCell><VisibilityIcon/></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Paper>
  )
}

export default invoices