import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

function transactions() {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Transaction ID</TableCell>
            <TableCell>Order ID</TableCell>
            <TableCell>Payment method</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>txn_3NcPiALzT8JtkyJz0AT4nAGU</TableCell>
            <TableCell>406</TableCell>
            <TableCell>stripe</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}

export default transactions;
