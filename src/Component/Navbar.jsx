import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Icon } from '@chakra-ui/icons';
import { MdSettings } from 'react-icons/md';
import { FaUserCircle } from "react-icons/fa"
import { Button,Box,Flex,Text } from '@chakra-ui/react';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    Portal,
    PopoverAnchor,
    Spacer
  } from '@chakra-ui/react'
const Navbar = () => {
    // const [show,setShow]= useState(false);
    // const handleEnter=()=>{
    //     setShow(!show)
    // }
    const navigate = useNavigate();
    const [superAdmin] = useState(JSON.parse(localStorage.getItem("SuperAdmintoken")));
    const handleSignout =()=>{
      localStorage.removeItem("SuperAdmintoken");
      navigate("/adminSignup")
      window.location.reload()
    }
  //  console.log(superAdmin)

    return (
        <div>
            <div className="container" style={{ width: "100%", height: "50px", display: "flex", backgroundColor: "teal", justifyContent: "space-between", alignItems: "center" }}>
                <div className='left' style={{ width: "20%", color: "white", fontSize: "24px" }}>
                    <Link to="/dashboard" style={{ textDecoration: "none", color: "white" }}>
                      Apartment
                    </Link>
                </div>
                <div className='right' style={{ width: "80%", display: "flex", justifyContent: "space-evenly", fontSize: "24px" }}>
                    <Box>
                    <Link to='/setting' style={{ textDecoration: "none", color: "white" }}>
                        <Icon as={MdSettings} />
                    </Link>
                    </Box>
                        <Box>
                          <Popover>
                                <PopoverTrigger>
                                  <Button > <Icon as={FaUserCircle} style={{ textDecoration: "none", color: "white",backgroundColor:"black" }} /></Button>
                                </PopoverTrigger>
                                <Portal>
                                  <PopoverContent>
                                    <PopoverArrow />
                                    <PopoverHeader>Profile</PopoverHeader>
                                    <PopoverCloseButton />
                                    <PopoverBody>
                                    <Box style={{ width:"20%",height:"100%", fontSize:"24px",fontWeight:"bold", alignItems:"center",marginLeft:"5%", color:"Black" }}>
                                        {
                                           superAdmin ? <> <Flex><Text>{superAdmin.token.role }</Text></Flex> </> :null
                                        } 
                                        </Box> 
                                    </PopoverBody>
                                    <PopoverFooter>
                                        <Flex>
                                        <Button>
                                            Profile
                                        </Button>
                                        <Spacer/>
                                        <Button onClick={handleSignout}>
                                                SignOut
                                        </Button>
                                        </Flex>
                                    </PopoverFooter>
                                  </PopoverContent>
                                </Portal>
                              </Popover>
                    </Box>
                </div>
            </div>

        </div>
    )
}

export default Navbar