import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { Link, useNavigate  } from "react-router-dom";
import { funResetPassword } from "../../../apis/admin/auth";
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";

function resetpassword() {
  const Navigate = useNavigate();
  const queryParams = new URLSearchParams(window.location.search);
  const token = queryParams.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setconfirmPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    setPasswordError(false);
    setconfirmPasswordError(false);

    if (password === "") {
      setPasswordError(true);
      setLoading(false);
    }

    if (confirmPassword === "") {
      setconfirmPasswordError(true);
      setLoading(false);
    }

    if(confirmPassword != password){
        setconfirmPasswordError(true);
        setPasswordError(false);
        toast.error('Password and Confirm Password does not match');
        setLoading(false);
    }

    if (password && confirmPassword == password ){
        let reset_password_detail = {
            token:token,
            password:password

        }
        funResetPassword(reset_password_detail)
        .then((res) => {
          let data = res.data;
          console.log(data);
          if(data.isError){
            toast.error(data.message)
            setLoading(false)
          }else{
            toast.success(data.result)
            setLoading(false);
            Navigate('/admin')
          }
         
        })
        .catch((e) => {
          console.log("eror", e);
        });
    }
};

  
  return (
    <React.Fragment>
      <div>{loading ? <CircularProgress color="success" /> : ""}</div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h2>Reset Forget Password</h2>
        <TextField
          label="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          color="primary"
          type="password"
          value={password}
          error={passwordError}
          fullWidth
          sx={{ mb: 3 }}
        />

        <TextField
          label="Enter confirm Password"
          onChange={(e) => setconfirmPassword(e.target.value)}
          variant="outlined"
          color="primary"
          type="password"
          value={confirmPassword}
          error={confirmPasswordError}
          fullWidth
          sx={{ mb: 3 }}
        />

        <Button
          variant="outlined"
          fullWidth
          sx={{
            mb: 3,
            color: "primary.contrastText",
            bgcolor: "primary.dark",
            "&:hover": { bgcolor: "primary.light" },
          }}
          type="submit"
        >
          Submit
        </Button>
      </form>
      <small>
        Already registered e-mail can
        <Link to="/admin/"> Log-In </Link>
      </small>
    </React.Fragment>
  );
}

export default resetpassword;
