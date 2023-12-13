import { Box, Button,Flex, Heading, Stack } from '@chakra-ui/react';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '@chakra-ui/icons';
import { RiDashboardLine, RiLogoutCircleRLine, RiHomeWifiFill } from "react-icons/ri";
import { LuTableProperties } from "react-icons/lu";
import { FaLandmark, FaFileInvoice } from "react-icons/fa";
import { FcHome } from "react-icons/fc";
import { TbHomeCheck, TbHomeMove, TbReport } from "react-icons/tb";
import { MdSettings, MdPayment } from "react-icons/md";
const Sidebar = () => {
    const navigate= useNavigate();
    const handleLogout = ()=>{
        // localStorage.removeItem("token")
        // navigate("/adminLogin")
    }
    return (
        <div>
            <Box>
                <Heading style={{ fontSize: "24px", marginTop: "15px", alignItems: "center" }}> Apartment </Heading>
                <hr style={{ marginTop: "10px" }} />
                <Stack marginTop={"15px"} style={{width:"100%",height:"100%",overflowX:"hidden",overflowY:"scroll"}}>
                    {/* 1 */}
                    <Link to="/dashboard" >
                        <Flex _hover={{ color: "white", bg: "green" }} alignItems={"start"} justify={"space-evenly"} style={{ height:"50px", border: "1px solid black", marginTop: "45x", padding: "2px" }}>
                            <Box style={{ fontSize: "30px", width: "48%" }}><RiDashboardLine style={{ marginLeft: "40%", alignItems: "center" }} /></Box>
                            <Box style={{ fontSize: "20px",width:"50%",textAlign:"start",alignItems:"center"}}>Dashboard</Box>
                        </Flex>
                    </Link>
                    {/* 2 */}
                    <Link to="/landlords" >
                        <Flex _hover={{ color: "white", bg: "green" }} alignItems={"start"} justify={"space-evenly"} style={{ height:"50px", border: "1px solid black", marginTop: "45x", padding: "2px" }}>
                            <Box style={{ fontSize: "30px", width: "48%" }}><FaLandmark style={{ marginLeft: "40%", alignItems: "center" }} /></Box>
                            <Box style={{ fontSize: "20px", width: "50%", textAlign: "start", alignItems: "center" }}>LandLords</Box>
                        </Flex>
                    </Link>
                    {/* 3 */}
                    <Link to="/properties" >
                        <Flex _hover={{ color: "white", bg: "green" }} alignItems={"start"} justify={"space-evenly"} style={{ height:"50px", border: "1px solid black", marginTop: "45x", padding: "2px" }}>
                            <Box style={{ fontSize: "30px", width: "48%" }}><LuTableProperties style={{ marginLeft: "40%", alignItems: "center" }} /></Box>
                            <Box style={{ fontSize: "20px", width: "50%", textAlign: "start", alignItems: "center" }}>Properties</Box>
                        </Flex>
                    </Link>
                    {/* 4 */}
                    <Link to="/tentants" >
                        <Flex _hover={{ color: "white", bg: "green" }} alignItems={"start"} justify={"space-evenly"} style={{ height:"50px", border: "1px solid black", marginTop: "45x", padding: "2px" }}>
                            <Box style={{ fontSize: "30px", width: "48%" }}><FcHome style={{marginLeft:"40%", alignItems: "center" }} /></Box>
                            <Box style={{ fontSize: "20px", width: "50%", textAlign: "start", alignItems: "center" }}>Tenants</Box>
                        </Flex>
                    </Link>
                    {/* 5 */}
                    <Link to="/leases" >
                        <Flex _hover={{ color: "white", bg: "green" }} alignItems={"start"} justify={"space-evenly"} style={{ height:"50px", border: "1px solid black", marginTop: "45x", padding: "2px" }}>
                            <Box style={{ fontSize: "30px", width: "48%" }}><TbHomeCheck style={{ marginLeft: "40%", alignItems: "center" }} /></Box>
                            <Box style={{ fontSize: "20px", width: "50%", textAlign: "start", alignItems: "center" }}>Leases</Box>
                        </Flex>
                    </Link>
                    {/* 6 */}
                    <Link to="/utilities " >
                        <Flex _hover={{ color: "white", bg: "green" }} alignItems={"start"} justify={"space-evenly"} style={{ height:"50px", border: "1px solid black", marginTop: "45x", padding: "2px" }}>
                            <Box style={{ fontSize: "30px", width: "48%" }}><RiHomeWifiFill style={{ marginLeft: "40%", alignItems: "center" }} /></Box>
                            <Box style={{ fontSize: "20px", width: "50%", textAlign: "start", alignItems: "center" }}>Utility </Box>
                        </Flex>
                    </Link>
                    {/* 7 */}
                    <Link to="/invoices" >
                        <Flex _hover={{ color: "white", bg: "green" }} alignItems={"start"} justify={"space-evenly"} style={{ height:"50px", border: "1px solid black", marginTop: "45x", padding: "2px" }}>
                            <Box style={{ fontSize: "30px", width: "48%" }}><FaFileInvoice style={{ marginLeft: "40%", alignItems: "center" }} /></Box>
                            <Box style={{ fontSize: "20px", width: "50%", textAlign: "start", alignItems: "center" }}>Invoices</Box>
                        </Flex>
                    </Link>
                    {/* 8 */}
                    <Link to="/payment" >
                        <Flex _hover={{ color: "white", bg: "green" }} alignItems={"start"} justify={"space-evenly"} style={{ height:"50px", border: "1px solid black", marginTop: "45x", padding: "2px" }}>
                            <Box style={{ fontSize: "30px", width: "48%" }}><Icon as={MdPayment} style={{ marginLeft: "6%", alignItems: "center" }} /></Box>
                            <Box style={{ fontSize: "20px", width: "50%", textAlign: "start", alignItems: "center" }}>Payment</Box>
                        </Flex>
                    </Link>
                    <Link to="/vacateNotices">
                        <Flex _hover={{ color: "white", bg: "green" }} alignContent={"start"} justify={"space-evenly"} style={{ height:"50px", border: "1px solid black", marginTop: "45x", padding: "2px" }}>
                            <Box style={{ fontSize: "30px", width: "48%" }}><TbHomeMove style={{ marginLeft: "40%", alignItems: "center" }} /></Box>
                            <Box style={{ fontSize: "20px", width: "50%", textAlign: "start", alignItems: "center" }}>VacateNotices</Box>
                        </Flex>
                    </Link>
                    {/* 9 */}
                    <Link to="/setting" >
                        <Flex _hover={{ color: "white", bg: "green" }} alignItems={"start"} justify={"space-evenly"} style={{ height:"50px", border: "1px solid black", marginTop: "45x", padding: "2px" }}>
                            <Box style={{ fontSize: "30px", width: "48%" }}><Icon as={MdSettings} style={{ marginLeft: "6%", alignItems: "center" }} /></Box>
                            <Box style={{ fontSize: "20px", width: "50%", textAlign: "start", alignItems: "center" }}>Settings</Box>
                        </Flex>
                    </Link>
                    {/* 10 */}
                    <Link to="/reports" >
                        <Flex _hover={{ color: "white", bg: "green" }} alignItems={"start"} justify={"space-evenly"} style={{ height:"50px", border: "1px solid black", marginTop: "45x", padding: "2px" }}>
                            <Box style={{ fontSize: "30px", width: "48%" }}><Icon as={TbReport} style={{ marginLeft: "6%", alignItems: "center" }} /></Box>
                            <Box style={{ fontSize: "20px", width: "50%", textAlign: "start", alignItems: "center" }}>Reports</Box>
                        </Flex>
                    </Link>
                    {/* 11 */}
                    <hr style={{ marginTop: "25px" }} />
                    <Button onClick={handleLogout} _hover={{ color: "white", bg: "green" }} alignItems={"start"} justify={"space-evenly"} style={{ height:"50px",border: "1px solid black", marginTop: "10%", padding: "2px" }} >
                            <Box style={{ fontSize: "30px", width: "48%" }}><RiLogoutCircleRLine style={{ marginLeft: "40%", alignItems: "center" }} /></Box>
                            <Box style={{ fontSize: "20px", width: "50%", textAlign: "start", alignItems: "center" }}>Logout</Box>
                    </Button>
                </Stack>
            </Box>
        </div>
    )
}

export default Sidebar