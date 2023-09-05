import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { funForgotPassword } from "../../../apis/admin/auth";
import { toast } from "react-toastify";
import CircularProgress from '@mui/material/CircularProgress';


function forgotpassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmailError(false);
    setLoading(true)
    if (email == "") {
      setEmailError(true);
      setLoading(false)
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setEmailError(true);
      setLoading(false)
    }

   
    if (email ) {
      const user_details = { email: email };
      funForgotPassword(user_details)
      .then((res) => {
        let data = res.data;
        if(data.isError){
            toast.error(data.message);
            setLoading(false)
        }else{
            toast.success(data.result);
            setEmail('');
            setLoading(false)
        }
       
      })
      .catch((e) => {
        console.log("eror", e);
      });
    }
  };

  return (
    <React.Fragment>
    
    <div>{loading ? <CircularProgress color="success" /> : ''}</div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h2>Forget Password</h2>
        <p>Enter your email address. You will receive an email with a link to reset your password.</p>
        <TextField
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          color="primary"
          type="email"
          sx={{ mb: 3 }}
          fullWidth
          value={email}
          error={emailError}
        />

        <Button
          variant="outlined"
          color="primary"
          fullWidth
          sx={{ mb: 3 }}
          type="submit"
        >
          Submit
        </Button>
      </form>
      <small>Already registered e-mail can 
        <Link to="/admin/"> Log-In </Link>
      </small>
    </React.Fragment>
  );
}

export default forgotpassword;
