import React, {  useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import { EmailIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement, Button, Box, FormControl, FormLabel, useToast } from '@chakra-ui/react';
import { LoginAuth } from '../Redux/Auth/action';
import { LOGIN_SUCCESS } from '../Redux/Auth/actionTypes';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show)
    }
    // const isAuth = useSelector((state)=> state.Auth.isAuth)
    const toast= useToast()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const location = useLocation();
    // const comingFrom = location.state?.data || "/";
    const handleLogin = async(e)=>{
         try {
            e.preventDefault();
            const res = await dispatch(LoginAuth({email,password}));
            console.log(res.payload.status);
             if (res.type === LOGIN_SUCCESS && res.payload.status === "success")
             { toast({
                     title: 'Admin Login success',
                     duration: 5000,
                     position: 'top',
                     isClosable: true,
                     colorScheme: 'green',
                     status: 'success',
                 })
                 navigate("/dashboard")
             } else {
                 toast({
                     title: 'Admin Sign in failed becasue  Check details and try again.',
                     duration: 5000,
                     position: 'top',
                     isClosable: true,
                     colorScheme: 'red',
                     status: 'error',
                 });
             }
         } catch (error) {
            console.log(error);
         }
    }
    return (
        <div className='mainLogin' style={{ margin: "auto",marginTop:"65px"}}>
            <Box className='wholeBoxForLogin' style={{ width: "500px", height: "450px", margin: "auto", marginTop: "25px", padding: "5px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                <h1 className='heading' style={{ fontSize: "24px",fontWeight:"bold" }}>Welcome Admin</h1>
                <form onSubmit={handleLogin}>
                <FormControl isRequired>
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
                <FormControl isRequired>
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
                
                <br />
                <Box className='forgetPassword' _hover={{ bg: "green", color: "white" }} style={{ width: "50%", height: "25px" }}>
                    <Link to="/forget-password" style={{ fontSize: "18px" }}>
                        Forget Your Password
                    </Link>
                </Box>
                <br />
                <Box className='LoginButton'
                    style={{ width: "100%", height: "50px" }}>
                    <Button className='button'
                        type="submit"
                        _hover={{ color: "white", bg: "green" }}
                        style={{ width: "100%", height: "50px", fontSize: "24px", color: "white", borderRadius: "15px" }}
                        >LOGIN</Button>
                </Box>
                </form>
            </Box>
        </div>
    )
}

export default Login