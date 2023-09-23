import React from 'react'
import {Box,Input, Button, FormControl, FormLabel, InputGroup, InputRightElement, useToast} from "@chakra-ui/react";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EmailIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { RiAdminLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { SignupAuth } from '../Redux/Auth/action';
import { SIGNUP_FAILURE } from '../Redux/Auth/actionTypes';
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("Admin");
  const [show,setShow]= useState(false);
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();
 const handleClick=()=>{
  setShow(!show)
 }
  const handleSubmit=(e)=>{
    e.preventDefault();
    const payload ={
      userType,
      email,
      password
    }
    if(userType === "" || email === "" || password===""){
      console.log("1");
       toast({
        title:"All Details Must Be Filled By The Admin",
        description:"Provide All Necessary Details",
         status: "error",
         duration: 5000,
         position: "top",
         isClosable: true,
         colorScheme:"red",
       })
    }else{
      dispatch(SignupAuth(payload))
        .then((r) => {
          if(r.type === SIGNUP_FAILURE){
            toast({
              title: r.payload,
              status: "error",
              duration: 5000,
              position: "top",
              isClosable: true,
              colorScheme: "red"
              
            })
          }else{
            toast({
              title: "Signup Successfull",
              status: "success",
              duration: 5000,
              position: "top",
              isClosable: true,
              colorScheme: "green",
            }) 
            navigate("/adminLogin");
            window.location.reload();
          }
        })
    } 
  }
  return (
    <div className='auth' style={{ width:"30%", height:"500px",margin:"auto", marginTop:"15px"}}>
       <Box className="auth-inner" style={{width:"100%", height:"100%"}}>
          <heading style={{fontSize:"24px", fontWeight:"bold"}}>Welcome to Rental Apartment</heading>
          <br/>
        <form onSubmit={handleSubmit}>
          <FormControl >
            <FormLabel>Admin</FormLabel>
            <InputGroup className='inputForEmail' style={{ width: "100%", height: "50%", marginTop: "15px" }}>
              <Input placeholder='enter your Type'
                type='text'
                autoComplete='Admin'
                _hover={{ bg: "green", color: "white" }}
                value={userType}
                style={{ fontSize: "24px" }}
                onChange={(e) => setUserType(e.target.value)} />
              <InputRightElement _hover={{ bg: "green", color: "white" }}>
                <RiAdminLine  style={{fontSize:"24px"}}/>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <br/>
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
            <br/>
          <div className="d-grid" style={{ width: "100%", height: "50px" }}>
            <Button type="submit" className="btn btn-primary" _hover={{ color: "white", bg: "green" }}
              style={{ width: "100%", height: "50px", fontSize: "24px", color: "white", borderRadius: "15px" }}>
              Sign Up
            </Button>
          </div>
          <br/>
          <p className="forgot-password text-right"
          style={{fontSize:"20px"}}>
            Create Registration for New Admin <Link to="/adminLogin" style={{color:"blue"}}>Login</Link>
          </p>
        </form>
       </Box>
    </div>
  )
}

export default Signup