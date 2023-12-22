import React from 'react'
import Chart from './Chart'
import { Flex ,Box, Heading, Spacer, Text} from '@chakra-ui/react';
import { FaPeopleGroup } from "react-icons/fa6";
//import { BsForwardFill } from "react-icons/bs";
const Dashboard = () => {
  return (
    <div>
       <Heading>TentantDashboard <small>controlPanel</small> </Heading>
       <Flex style={{width:"100%",height:"200px",padding:"5px",marginTop:"5px"}}>
        <Box style={{width:"25%",height:"100%",backgroundColor:"green"}}>
          <Flex style={{color:"white"}}>
          <Box style={{color:"white",fontSize:"24px",marginTop:"5px",padding:"5px"}}>
            <h1>Income of Rent</h1>
            <p>RentStatement</p>
          </Box>
          <Spacer/>
          <Box style={{color:"red",fontSize:"75px",marginTop:"5px",padding:"5px"}}>
               <FaPeopleGroup style={{textAlign:'center'}}/>
          </Box>
          </Flex>
          <Box style={{width:"100%",height:"70px",border:"1px solid white",marginTop:"10px",padding:"20px",fontSize:"28px",fontWeight:"bold",textAlign:"center",color:"white"}}>
            MoreDetails 
            {/* <i><BsForwardFill /></i> */}
          </Box>
          </Box>
        <Spacer/>
        <Box style={{width:"25%",height:"100%",border:"1px solid red",marginLeft:"5px",backgroundColor:"green"}}>Hello</Box>
        <Spacer/>
        <Box style={{width:"25%",height:"100%",border:"1px solid red",marginLeft:"5px",backgroundColor:"green"}}>Hello</Box>
        <Spacer/>
        <Box style={{width:"25%",height:"100%",border:"1px solid red",marginLeft:"5px",backgroundColor:"green"}}>Hello</Box>
       </Flex>
      <Chart/>
    </div>
  )
}

export default Dashboard