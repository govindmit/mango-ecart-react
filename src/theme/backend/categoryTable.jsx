import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import TablePagination from "@mui/material/TablePagination";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const rowsPerPageOptions = [10, 25, 50];

function categoryTable({ data }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchText, setSearchText] = useState("");
  const [sortedData, setSortedData] = useState(data);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchText(value);
    const filteredData = data.filter((item) =>
      item.categoryTranslations[0].name.toLowerCase().includes(value)
    );
    setSortedData(filteredData);
    setPage(0);
  };

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <TextField
        label="Search"
        variant="outlined"
        value={searchText}
        onChange={handleSearch}
        style={{ marginBottom: "16px" }}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Visible in menu</TableCell>
              <TableCell>Visible in filter</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.categoryTranslations[0].name}</TableCell>
                  <TableCell>{item.position}</TableCell>
                  <TableCell>{item.is_filter ? "Yes" : "No"}</TableCell>
                  <TableCell>{item.status ? "Yes" : "No"}</TableCell>
                  <TableCell>
                    <RemoveRedEyeIcon />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        component="div"
        count={sortedData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}

export default categoryTable;
