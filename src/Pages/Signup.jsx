import React from 'react'
import { Box, Input, Button, FormControl, RadioGroup, Stack, Radio, FormLabel, InputGroup, InputRightElement, useToast} from "@chakra-ui/react";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EmailIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { RiAdminLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { SignupAuth,rolesData } from '../Redux/Auth/action';
import { SIGNUP_FAILURE } from '../Redux/Auth/actionTypes';
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password,setPassword]=useState("");
  const [userType, setUserType] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const [show,setShow]= useState(false);
 const handleClick=()=>{
  setShow(!show)
 }
 const handleChange=(e)=>{
     const radio = e.target.value;
     setUserType(radio)
   if (radio === "SuperAdmin"){
    navigate("/adminLogin", {state:{role:radio}})
   }
   dispatch(rolesData(radio))
 }
 const handleSubmit = (e) => {
  e.preventDefault();
  if (userType === "Admin" || userType === "User") {
    const payload = {
      userType,
      email,
      password
    };

    if (userType === "" || email === "" || password === "") {
      toast({
        title: "All Details Must Be Filled By The Admin",
        description: "Provide All Necessary Details",
        status: "error",
        duration: 5000,
        position: "top",
        isClosable: true,
        colorScheme: "red",
      });
    } else {
      dispatch(SignupAuth(payload))
        .then((r) => {
          if (r.type === SIGNUP_FAILURE) {
            toast({
              title: r.payload,
              status: "error",
              duration: 5000,
              position: "top",
              isClosable: true,
              colorScheme: "red",
            });
          } else {
            toast({
              title: "Signup Successful",
              status: "success",
              duration: 5000,
              position: "top",
              isClosable: true,
              colorScheme: "green",
            });
            if (userType !== "Admin") {
              navigate("/owner&user-login");
              window.location.reload();
            }
          }
        });
    }
  }
};

  return (
    <div className='auth' style={{ width:"40%", height:"500px",margin:"auto", marginTop:"15px" }}>
       <Box className="auth-inner" style={{width:"100%", height:"100%",position:"relative"}}>
          <heading style={{fontSize:"24px", fontWeight:"bold",textAlign:"center"}}>Welcome to Rental Apartment</heading>
          <br/>
        <form onSubmit={handleSubmit}>
          <FormControl >
            <FormLabel>Admin</FormLabel>
            <InputGroup className='inputForEmail' style={{ width: "100%", height: "50%", marginTop: "15px" }}>
              <RadioGroup style={{ fontSize: "24px", marginTop: "5px", padding: "5px" }} >
                <Stack direction='row' onChange={handleChange} value={userType}>
                  <Radio value='SuperAdmin'>SuperAdmin</Radio>
                  <Radio value='Admin'>Admin</Radio>
                  <Radio value='User'>User</Radio>
                </Stack>
              </RadioGroup>
              <InputRightElement _hover={{ bg: "green", color: "white" }}>
                <RiAdminLine  style={{fontSize:"24px"}}/>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          {
             userType === "Admin" ? (
             <Box>
               <FormControl >
                  <FormLabel>Email</FormLabel>
                  <InputGroup className='inputForEmail' style={{ width: "100%", height: "50%", marginTop: "15px" }}>
                    <Input placeholder='enter your email'
                      type='email'
                      autoComplete='email'
                      _hover={{ bg: "green", color: "white" }}
                      value={email}
                      style={{ fontSize: "24px" }}
                      onChange={(e) => setEmail(e.target.value)} />
                    <InputRightElement _hover={{ bg: "green", color: "white" }}>
                      <EmailIcon style={{ fontSize: "24px" }} />
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <br />
                <FormControl >
                  <FormLabel>UserType</FormLabel>
                  <InputGroup className='inputForUserType' style={{ width: "100%", height: "50%", marginTop: "15px" }}>
                    <Input placeholder='enter your UserType'
                      type='text'
                      autoComplete='userType'
                      _hover={{ bg: "green", color: "white" }}
                      value={userType}
                      style={{ fontSize: "24px" }}
                      onChange={(e) => setUserType(e.target.value)} />
                  </InputGroup>
                </FormControl>
                <br/>
                <FormControl >
                  <FormLabel>Password</FormLabel>
                  <InputGroup size='md'>
                    <Input
                      pr='4.5rem'
                      type={show ? 'text' : 'password'}
                      placeholder='enter your password'
                      _hover={{ bg: "green", color: "white" }}
                      style={{ fontSize: "24px" }}
                      autoComplete='current-password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement width='4.5rem'>
                      <Button _hover={{ color: "white", bg: "green" }} h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? <ViewOffIcon style={{ fontSize: "24px" }} /> : <ViewIcon style={{ fontSize: "24px" }} />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <div className="d-grid" style={{ width: "100%", height: "50px"}}>
            <Button type="submit" className="btn btn-primary" _hover={{ color: "white", bg: "green" }}
              style={{ width: "100%", height: "50px", fontSize: "24px", color: "white", borderRadius: "15px" }}>
              Sign Up
            </Button>
          </div>
          <p className="forgot-password text-right"
          style={{fontSize:"20px",textAlign:"center"}}>
            Create Registration for Admin and User <Link to="/owner-login" style={{color:"blue"}}>Login</Link>
          </p>
             </Box>
             ):(
              <Box>
                 <FormControl >
                  <FormLabel>Email</FormLabel>
                  <InputGroup className='inputForEmail' style={{ width: "100%", height: "50%", marginTop: "15px" }}>
                    <Input placeholder='enter your email'
                      type='email'
                      autoComplete='email'
                      _hover={{ bg: "green", color: "white" }}
                      value={email}
                      style={{ fontSize: "24px" }}
                      onChange={(e) => setEmail(e.target.value)} />
                    <InputRightElement _hover={{ bg: "green", color: "white" }}>
                      <EmailIcon style={{ fontSize: "24px" }} />
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <br/>
                <FormControl >
                  <FormLabel>UserType</FormLabel>
                  <InputGroup className='inputForUserType' style={{ width: "100%", height: "50%", marginTop: "15px" }}>
                    <Input placeholder='enter your userType'
                      type='text'
                      autoComplete='userType'
                      _hover={{ bg: "green", color: "white" }}
                      value={userType}
                      style={{ fontSize: "24px" }}
                      onChange={(e) => setUserType(e.target.value)} />
                  </InputGroup>
                </FormControl>
                <br />
                <FormControl >
                  <FormLabel>Password</FormLabel>
                  <InputGroup size='md'>
                    <Input
                      pr='4.5rem'
                      type={show ? 'text' : 'password'}
                      placeholder='enter your password'
                      _hover={{ bg: "green", color: "white" }}
                      style={{ fontSize: "24px" }}
                      autoComplete='current-password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement width='4.5rem'>
                      <Button _hover={{ color: "white", bg: "green" }} h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? <ViewOffIcon style={{ fontSize: "24px" }} /> : <ViewIcon style={{ fontSize: "24px" }} />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <div className="d-grid" style={{ width: "100%", height: "50px"}}>
            <Button type="submit" className="btn btn-primary" _hover={{ color: "white", bg: "green" }}
              style={{ width: "100%", height: "50px", fontSize: "24px", color: "white", borderRadius: "15px" }}>
              Sign Up
            </Button>
          </div>
          <p className="forgot-password text-right"
          style={{fontSize:"20px",textAlign:"center"}}>
            Create Registration for Admin and User <Link to="/user-login" style={{color:"blue"}}>Login</Link>
          </p>
              </Box>
             )
          }
        </form>
       </Box>
    </div>
  )
}

export default Signup