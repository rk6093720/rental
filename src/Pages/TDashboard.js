
import { Box, Button, Flex, Icon, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Portal, Spacer, Text } from "@chakra-ui/react"
import React, { useState } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { MdSettings } from "react-icons/md"
import { FaUserCircle } from "react-icons/fa"
import MainRoutes from "./MainRoutes"
import TentantSidebar from "../Component/TentantSidebar"
const TDashboard = ()=>{
    const navigate = useNavigate();
    const [User]=useState(JSON.parse(localStorage.getItem("Usertoken"))) 
    console.log(User);
    const handleSignout =()=>{
      localStorage.removeItem("Usertoken");
      navigate("/adminSignup")
      window.location.reload()
    }
    return (
        <div>
            <Flex style={{width:"100%"}}>
             <Box style={{width:"20%"}}>
                <TentantSidebar/>
             </Box>
             <Spacer  style={{width:"1%"}}/>
             <Box  style={{width:"79%"}}>
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
                                    <PopoverArrow/>
                                    <PopoverHeader>Profile</PopoverHeader>
                                    <PopoverCloseButton />
                                    <PopoverBody>
                                    <Box style={{ width:"20%",height:"100%", fontSize:"24px",fontWeight:"bold", alignItems:"center",marginLeft:"5%", color:"Black" }}>
                                        {
                                          User ? <><Flex><Text>{User.role }</Text></Flex></>:null
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
            <MainRoutes/>
            <Outlet/>
             </Box>
            </Flex>
        </div>
    )
}
export default TDashboard