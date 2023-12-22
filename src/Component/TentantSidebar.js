import { Box,Flex, Heading, Stack } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';
import { Icon } from '@chakra-ui/icons';
import { RiDashboardLine,RiHomeWifiFill } from "react-icons/ri";
import { LuTableProperties } from "react-icons/lu";
import {  FaFileInvoice } from "react-icons/fa";
import { FcHome } from "react-icons/fc";
import { TbHomeCheck, TbHomeMove, TbReport } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
const TentantSidebar = () => {
    return (
        <div>
            <Box>
                <Heading style={{ fontSize: "24px", marginTop: "15px", alignItems: "center" }}> Apartment </Heading>
                <hr style={{ marginTop: "10px" }} />
                <Stack marginTop={"15px"} style={{width:"100%",height:"100%",overflowX:"hidden",overflowY:"scroll"}}>
                    {/* 1 */}
                    <Link to="/tentant-dashboard/dashboard" >
                        <Flex _hover={{ color: "white", bg: "green" }} alignItems={"start"} justify={"space-evenly"} style={{ height:"50px", border: "1px solid black", marginTop: "45x", padding: "2px" }}>
                            <Box style={{ fontSize: "30px", width: "48%" }}><RiDashboardLine style={{ marginLeft: "40%", alignItems: "center" }} /></Box>
                            <Box style={{ fontSize: "20px",width:"50%",textAlign:"start",alignItems:"center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>Dashboard</Box>
                        </Flex>
                    </Link>
                    {/* 3 */}
                    <Link to="/tentant-dashboard/properties" >
                        <Flex _hover={{ color: "white", bg: "green" }} alignItems={"start"} justify={"space-evenly"} style={{ height:"50px", border: "1px solid black", marginTop: "45x", padding: "2px" }}>
                            <Box style={{ fontSize: "30px", width: "48%" }}><LuTableProperties style={{ marginLeft: "40%", alignItems: "center" }} /></Box>
                            <Box style={{ fontSize: "20px", width: "50%", textAlign: "start", alignItems: "center", whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis" }}>Rent Statement</Box>
                        </Flex>
                    </Link>
                    {/* 4 */}
                    <Link to="/tentant-dashboard/tentants" >
                        <Flex _hover={{ color: "white", bg: "green" }} alignItems={"start"} justify={"space-evenly"} style={{ height:"50px", border: "1px solid black", marginTop: "45x", padding: "2px" }}>
                            <Box style={{ fontSize: "30px", width: "48%" }}><FcHome style={{marginLeft:"40%", alignItems: "center" }} /></Box>
                            <Box style={{ fontSize: "20px", width: "50%", textAlign: "start", alignItems: "center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis" }}>Tenants Details</Box>
                        </Flex>
                    </Link>
                    {/* 5 */}
                    <Link to="/tentant-dashboard/leases" >
                        <Flex _hover={{ color: "white", bg: "green" }} alignItems={"start"} justify={"space-evenly"} style={{ height:"50px", border: "1px solid black", marginTop: "45x", padding: "2px" }}>
                            <Box style={{ fontSize: "30px", width: "48%" }}><TbHomeCheck style={{ marginLeft: "40%", alignItems: "center" }} /></Box>
                            <Box style={{ fontSize: "20px", width: "50%", textAlign: "start", alignItems: "center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis" }}>Leases Details</Box>
                        </Flex>
                    </Link>
                    {/* 6 */}
                    <Link to="/tentant-dashboard/utilities " >
                        <Flex _hover={{ color: "white", bg: "green" }} alignItems={"start"} justify={"space-evenly"} style={{ height:"50px", border: "1px solid black", marginTop: "45x", padding: "2px" }}>
                            <Box style={{ fontSize: "30px", width: "48%" }}><RiHomeWifiFill style={{ marginLeft: "40%", alignItems: "center" }} /></Box>
                            <Box style={{ fontSize: "20px", width: "50%", textAlign: "start", alignItems: "center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis" }}>Utility </Box>
                        </Flex>
                    </Link>
                    {/* 7 */}
                    <Link to="/tentant-dashboard/invoices" >
                        <Flex _hover={{ color: "white", bg: "green" }} alignItems={"start"} justify={"space-evenly"} style={{ height:"50px", border: "1px solid black", marginTop: "45x", padding: "2px" }}>
                            <Box style={{ fontSize: "30px", width: "48%" }}><FaFileInvoice style={{ marginLeft: "40%", alignItems: "center" }} /></Box>
                            <Box style={{ fontSize: "20px", width: "50%", textAlign: "start", alignItems: "center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis" }}>Invoices</Box>
                        </Flex>
                    </Link>
                    {/* 8 */}
                    <Link to="/tentant-dashboard/payment" >
                        <Flex _hover={{ color: "white", bg: "green" }} alignItems={"start"} justify={"space-evenly"} style={{ height:"50px", border: "1px solid black", marginTop: "45x", padding: "2px" }}>
                            <Box style={{ fontSize: "30px", width: "48%" }}><Icon as={MdPayment} style={{ marginLeft: "38%", alignItems: "center" }} /></Box>
                            <Box style={{ fontSize: "20px", width: "50%", textAlign: "start", alignItems: "center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis" }}>Payment</Box>
                        </Flex>
                    </Link>
                    <Link to="/tentant-dashboard/vacateNotices">
                        <Flex _hover={{ color: "white", bg: "green" }} alignContent={"start"} justify={"space-evenly"} style={{ height:"50px", border: "1px solid black", marginTop: "45x", padding: "2px" }}>
                            <Box style={{ fontSize: "30px", width: "48%" }}><TbHomeMove style={{ marginLeft: "40%", alignItems: "center" }} /></Box>
                            <Box style={{ fontSize: "20px", width: "50%", textAlign: "start", alignItems: "center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis" }}>VacateNotices</Box>
                        </Flex>
                    </Link>
                    {/* 10 */}
                    <Link to="/tentant-dashboard/reports" >
                        <Flex _hover={{ color: "white", bg: "green" }} alignItems={"start"} justify={"space-evenly"} style={{ height:"50px", border: "1px solid black", marginTop: "45x", padding: "2px" }}>
                            <Box style={{ fontSize: "30px", width: "48%" }}><Icon as={TbReport} style={{ marginLeft: "38%", alignItems: "center" }} /></Box>
                            <Box style={{ fontSize: "20px", width: "50%", textAlign: "start", alignItems: "center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis" }}>RentReports</Box>
                        </Flex>
                    </Link>
                </Stack>
            </Box>
        </div>
    )
}

export default TentantSidebar