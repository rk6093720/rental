import React from 'react'
import { Flex ,Box, Heading, Spacer, Text, Button, useDisclosure} from '@chakra-ui/react';
import { FaPeopleGroup } from "react-icons/fa6";
import { BsFillDoorOpenFill } from "react-icons/bs";
import { SiHelpdesk } from "react-icons/si";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import Chart1 from './Chart1';
const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
          <Box style={{width:"100%",height:"100px",marginTop:"0px",padding:"30px"}}>
            <Button onClick={onOpen} style={{width:"100",height:"100%",alignItems:"center",color:"black", textAlign:"center",fontSize:"24px",fontWeight:"bold"}}> MoreDetails </Button>
            {/* <i><BsForwardFill /></i> */}
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Help Desk for Tentants</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Box>
                  <Flex>
                    <Box>Contact</Box>
                    <Spacer/>
                    <Box>Number of Security /guard</Box>
                  </Flex>
                  <br />
                  <Flex>
                    <Box>Contact</Box>
                    <Spacer/>
                    <Box>Number of Security /guard</Box>
                  </Flex>
                  </Box>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
        </Box>
       </Flex>
       <Chart1/>
    </div>
  )
}

export default Dashboard