import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { funlastorder } from "../../../../apis/admin/order";
import FunCustomTable from "../../../../theme/backend/FunCustomTable";

function lastorder() {
  const [order, setorder] = useState([]);
  let adminlogin = localStorage.getItem("token");

  useEffect(() => {
    // Call the function and update the state with the result
    funlastorder(adminlogin).then((result) => {
      setorder(result?.data?.result?.data?.rows);
    });
  }, []);
  return (
    <Grid item xs={12}>
      <Paper style={{ height: "100%", padding: "20px" }}>
        <div>  {order.length > 0 && <FunCustomTable data={order} />}</div>
      </Paper>
    </Grid>
  );
}

export default lastorder;
