import React from 'react'
import { Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

function shipments() {
    return (
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Shipment Date</TableCell>
                <TableCell>Carrier Title</TableCell>
                <TableCell>Tracking Number</TableCell>
                <TableCell>Total Quantity</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>29</TableCell>
                <TableCell>Sep 5, 2023, 7:11:30 PM</TableCell>
                <TableCell>aaa</TableCell>
                <TableCell>aaaa</TableCell>
                <TableCell>1</TableCell>
                <TableCell><VisibilityIcon/></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      );
}

export default shipments