import React , {useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Lastorder from "./dashinfo/lastorder";
import {dashboard} from "../../../apis/admin/dashboard"
import PersistentDrawerRight from "../../../theme/backend/sidebar/index"

function dashboardinfo() {
  const [data, setData] = useState(null);
  let adminlogin = localStorage.getItem('token');

  useEffect(() => {
    // Call the function and update the state with the result
    dashboard(adminlogin).then((result) => {
      result.data.isError ? setData(false) : setData(result.data);
    });
  }, []);

  return (

    <>
      
    <PersistentDrawerRight/>
    <div>
      <h2>Dashboard</h2>
      <Grid container spacing={2}>
      <Paper style={{ height: '100%', padding: '20px' }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Grid item xs={6}>
          <div>
            <h5>Average Sale</h5>
            <p>$ {data ? data.result.averageSale.averageSale : 0}</p>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div>
            <h5>Total Orders</h5>
            <p>{data ? data.result.totalOrder : 0}</p>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div>
            <h5>Total Customer</h5>
            <p>{data ? data.result.totalCustomer : 0}</p>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div>
            <h5>Total Sale</h5>
            <p>{data ? data.result.totalSale.totalSale : 0}</p>
          </div>
        </Grid>
        </div>
        </Paper>
        <Lastorder />
      </Grid>
    </div>
     </>
  );
}

export default dashboardinfo;
