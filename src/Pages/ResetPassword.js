import { EmailIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Box, FormControl,InputGroup, FormLabel, Heading, Input, InputRightElement, Button, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getResetPwd } from '../Redux/Auth/action';
import { postResetPwd } from '../Redux/Auth/action';

const ResetPassword = () => {
  const [email,setEmail]= useState("");
  const [show,setShow]= useState(false);
  const [password,setPassword]=useState("");

  const handleClick= ()=>{
    setShow(!show)
  }
  const toast = useToast();
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const {id,token}= useParams()
  console.log(id, token)
  const handleResetPwd=(e)=>{
    e.preventDefault();
   if(email ==="" || password === ""){
    toast({
      title: "please write your email address",
      description: "please provide your credentials",
      duration: 5000,
      colorScheme: "red",
      status: "error",
      isClosable: true,
      position: "top",
    })
   }else{
      dispatch(postResetPwd(id,token,password))
      .then((r)=>{
        if(r.type === "POST_RESET_PASSWORD_SUCCESS"){
          toast({
            title: "please write your email address",
            description: "please provide your credentials",
            duration: 5000,
            colorScheme: "red",
            status: "success",
            isClosable: true,
            position: "top",
          })
         navigate("/")
        }
      })
   }
  }
  const getResetPassword= async()=>{
   await dispatch(getResetPwd(id,token))
    .then((r)=>{
      if (r.type === "GET_RESET_PASSWORD_SUCCESS"){
         console.log(r.payload)
      }
    })
    .catch((e)=>{
      console.log(e);
    })
  }
  useEffect(()=>{
    getResetPassword()
  },[])
  return (
    <div>
      <Box className='resetpwd' style={{border:"1px solid black",width:"30%",height:"500px",margin:"auto",marginTop:"8%"}}>
          <Heading>Reset Password</Heading>
        <form onSubmit={handleResetPwd} >
          <FormControl >
            <FormLabel>Email</FormLabel>
            <InputGroup className='inputForEmail' style={{ width: "100%", height: "50%", marginTop: "15px" }}>
              <Input placeholder='admin@gmail.com'
                type='email'
                autoComplete='Admin'
                _hover={{ bg: "green", color: "white" }}
               value={email}
               onChange={(e)=>setEmail(e.target.value)}
                style={{ fontSize: "24px" }}
                 />
              <InputRightElement _hover={{ bg: "green", color: "white" }}>
                <EmailIcon style={{ fontSize: "24px" }} />
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <br/>
          <FormControl >
            <FormLabel> New Password</FormLabel>
            <InputGroup size='md'>
              <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='enter your new  password'
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
          <Box className='LoginButton'
            style={{ width: "100%", height: "50px" }}>
            <Button className='button'
              type="submit"
              _hover={{ color: "white", bg: "green" }}
              style={{ width: "100%", height: "50px", fontSize: "24px", color: "white", borderRadius: "15px" }}
            >ResetPassword</Button>
          </Box>
         </form>
      </Box>
    </div>
  )
}

export default ResetPassword