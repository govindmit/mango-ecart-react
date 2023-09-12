import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { funcategories } from "../../../apis/admin/category";
import PersistentDrawerRight from "../../../theme/backend/sidebar/index";
import CategoryTable from "../../../theme/backend/categoryTable";

function category() {
  const [data, setData] = useState(null);
  let adminlogin = localStorage.getItem("token");

  useEffect(() => {
    // Call the function and update the state with the result
    funcategories(adminlogin).then((result) => {
      setData(result?.data?.result?.data?.rows);
    });
  }, []);
console.log(data);
  return (
    <>
      <PersistentDrawerRight />
      <Grid item xs={12}>
        <Paper style={{ height: "100%", padding: "20px" }}>
          <div> {data && <CategoryTable data={data} />}</div>
        </Paper>
      </Grid>
    </>
  );
}

export default category;
