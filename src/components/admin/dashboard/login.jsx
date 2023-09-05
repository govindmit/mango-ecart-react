import React, { useState } from "react";
import { TextField, FormControl, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { funLogin } from "../../../apis/admin/auth";
import { toast } from 'react-toastify';
import CircularProgress from '@mui/material/CircularProgress';


function login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true)

    setEmailError(false);
    setPasswordError(false);

    if (email == "") {
      setEmailError(true);
      setLoading(false)
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setEmailError(true);
      setLoading(false)
    }

    if (password === "") {
      setPasswordError(true);
      setLoading(false)
    }
    if (email && password) {
      const user_details = { email: email, password: password };
      funLogin(user_details)
        .then((res) => {
          let data = res.data;
          if (data.isError) {
            toast.error(data.message);
            setLoading(false)
          } else {
            let token = data.result.token;
            toast.success(data.result.message);
            localStorage.setItem('token', token);
            setLoading(false)
            window.location.reload(false);
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
        <h2>Login</h2>
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
        <TextField
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          color="primary"
          type="password"
          value={password}
          error={passwordError}
          fullWidth
          sx={{ mb: 3 }}
        />

        <Button
          variant="outlined"
          color="primary"
          fullWidth
          sx={{ mb: 3 }}
          type="submit"
        >
          Login
        </Button>
      </form>
      <small>
        <Link to="/admin/forgotpassword">Forgot Password?</Link>
      </small>
    </React.Fragment>
  );
}

export default login;
