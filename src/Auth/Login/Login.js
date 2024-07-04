// import './Login.css'
import { Avatar, Button, Checkbox, CssBaseline, FormControlLabel, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { MdLockOutline } from 'react-icons/md'
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import {apiUrl} from '../../utils/app.utils' 

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState()
  const [password, setPassword] = useState();
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate()


  useEffect(() => {
    let auth = localStorage.getItem('Authorization');
    if (auth) {
      navigate("/Home")
    }
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`${apiUrl}/login`, { email, password })
      .then(result => {
        console.log("result", result);
        if (result.data) {
          navigate("/Home")
          alert("Successfully")
        }

      })
      .catch(() => alert('Invalid Credentials'));
  };


  return (
    <>
    <form onSubmit={handleSubmit}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: '#1976d2' }}>
          <MdLockOutline />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box  noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name='email'

             onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name='password'
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            type={showPassword ? "text" : "password"}
            id="password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" onClick={handleClickShowPassword} sx={{cursor:'pointer'}}>
                  {showPassword ? <RiEyeFill /> : <RiEyeOffFill />}
                </InputAdornment>
              )
            }}

          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />                          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/forgotpassword" variant="body2" style={{ color: '#1976d2' }}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/register" variant="body2" >
                Don't have an account?<span style={{ color: '#1976d2' }}> Sign Up</span>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
    </form>
 
  </>
  )
}

export default Login