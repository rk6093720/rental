import React from 'react'
import Chart from './Chart'
import { Flex ,Box, Heading, Spacer, Text} from '@chakra-ui/react';
import { FaPeopleGroup } from "react-icons/fa6";
import { BsFillDoorOpenFill } from "react-icons/bs";
import { SiHelpdesk } from "react-icons/si";
const Dashboard = () => {
  return (
    <div>
       <Heading>TentantDashboard <small>controlPanel</small> </Heading>
       <Flex style={{width:"100%",height:"200px",padding:"15px",marginTop:"5px"}}>
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
          <Box style={{width:"100%",height:"50px",marginTop:"5px",padding:"20px"}}>
            <Text style={{width:"100",height:"100%",alignItems:"center",color:"white", textAlign:"center",fontSize:"24px",fontWeight:"bold"}}> MoreDetails </Text>
            {/* <i><BsForwardFill /></i> */}
          </Box>
          </Box>
        <Spacer/>
        <Box style={{width:"25%",height:"100%",marginLeft:"5px",backgroundColor:"green"}}>
        <Flex style={{color:"white"}}>
          <Box style={{color:"white",fontSize:"24px",marginTop:"5px",padding:"5px"}}>
            <h1>Unit Details</h1>
            <p>Tentants</p>
          </Box>
          <Spacer/>
          <Box style={{color:"red",fontSize:"75px",marginTop:"5px",padding:"5px"}}>
               <BsFillDoorOpenFill  style={{textAlign:'center'}}/>
          </Box>
          </Flex>
          <Box style={{width:"100%",height:"50px",marginTop:"5px",padding:"20px"}}>
            <Text style={{width:"100",height:"100%",alignItems:"center",color:"white", textAlign:"center",fontSize:"24px",fontWeight:"bold"}}> MoreDetails </Text>
            {/* <i><BsForwardFill /></i> */}
          </Box>
        </Box>
        <Spacer/>
        <Box style={{width:"25%",height:"100%",marginLeft:"5px",backgroundColor:"green"}}>
        <Flex style={{color:"white"}}>
          <Box style={{color:"white",fontSize:"24px",marginTop:"5px",padding:"5px"}}>
            <h1>total complain</h1>
            <p>complain</p>
          </Box>
          <Spacer/>
          <Box style={{color:"red",fontSize:"75px",marginTop:"5px",padding:"5px"}}>
               <FaPeopleGroup style={{textAlign:'center'}}/>
          </Box>
          </Flex>
          <Box style={{width:"100%",height:"50px",marginTop:"5px",padding:"20px"}}>
            <Text style={{width:"100",height:"100%",alignItems:"center",color:"white", textAlign:"center",fontSize:"24px",fontWeight:"bold"}}> MoreDetails </Text>
            {/* <i><BsForwardFill /></i> */}
          </Box>
        </Box>
        <Spacer/>
        <Box style={{width:"25%",height:"100%",marginLeft:"5px",backgroundColor:"green"}}>
        <Flex style={{color:"white"}}>
          <Box style={{color:"white",fontSize:"24px",marginTop:"5px",padding:"5px"}}>
            <h1>Help Desk</h1>
            <p>For Tentants</p>
          </Box>
          <Spacer/>
          <Box style={{color:"red",fontSize:"75px",marginTop:"5px",padding:"5px"}}>
               <SiHelpdesk style={{textAlign:'center'}}/>
          </Box>
          </Flex>
          <Box style={{width:"100%",height:"50px",marginTop:"5px",padding:"20px"}}>
            <Text style={{width:"100",height:"100%",alignItems:"center",color:"white", textAlign:"center",fontSize:"24px",fontWeight:"bold"}}> MoreDetails </Text>
            {/* <i><BsForwardFill /></i> */}
          </Box>
        </Box>
       </Flex>
      <Chart/>
    </div>
  )
}

export default Dashboard