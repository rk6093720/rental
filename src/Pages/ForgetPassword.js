import { EmailIcon } from '@chakra-ui/icons'
import { Box, Flex, FormControl,Button, FormLabel, Heading, Input, InputGroup, InputRightElement, Spacer, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { forgetPassword } from '../Redux/Auth/action';

const ForgetPassword = () => {
  const [email,setEmail]= useState("");
  const toast = useToast();
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const handleResetCode = ()=>{
     if(email === ""){
      toast({
        title:"please write your email address",
        description:"please provide your credentials",
        duration:5000,
        colorScheme:"red",
        status:"error",
        isClosable:true,
        position:"top",
      })
     }else{
        const payload={
          email
        }
        dispatch(forgetPassword(payload))
        .then((r)=>{
          console.log(r.type)
          if (r.type === "FORGET_PASSWORD_SUCCESS")
          {
            toast({
              title: "forgetPassword successfully to sent on the mail",
              description:" Please check your mail if you got mail then you can reset your password  ",
              duration: 5000,
              colorScheme: "green",
              status: "success",
              isClosable: true,
              position: "top",
            })
           
          }
        })
     }

  }
  return (
    <div>
       <Box className='forgetpassword' style={{border:"1px solid black",width:"30%",margin:"auto",padding:"5px",marginTop:"15%"}}>
           <Heading>Forget Password</Heading>
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
          <Flex>
              <Box></Box>
              <Spacer/>
          <Box style={{ width: "35%", height: "50px" }}>
          <Button className='button'
          onClick={handleResetCode}
           _hover={{ color: "white", bg: "green" }}
            style={{ width: "100%", height: "50px", fontSize: "24px", color: "white", borderRadius: "15px" }}
          >Reset Code</Button>
              </Box>
          </Flex>
       </Box>
    </div>
  )
}

export default ForgetPassword