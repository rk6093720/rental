import { Box,Text, FormControl, FormLabel, Input, Select, Spacer, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';
import { BsPersonFillAdd } from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux';
import { deleteLandLord, getLandlord } from '../Redux/App/action';
import { ChevronDownIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { Button, Flex, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { getInvoice, postInvoice } from '../Redux/VacateNotice/action';
import { GET_INVOICE_SUCCESS } from '../Redux/VacateNotice/actionTypes';
const Invoices = () => {
  const dispatch = useDispatch();
  const [color, setColor] = useState(null);
  const [landlordFilter, setLandlordFilter] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [invoice,setInvoice]=useState("");
  const [date,setDate]=useState("");
  const [roomType,setRoomType]=useState("");
  const [period,setPeriod]=useState("");
  const [totalAmount,setTotalAmount]=useState("");
  const [payment,setPayment]=useState("");
  const [rent,setRent]=useState("");
  const [month,setMonth]=useState("");
  const [year,setYear]=useState("");
  const handleFilter = (e) => {
    setLandlordFilter(e.target.value)
  }
  const handleAddInvoice=()=>{
    const payload={
      invoice,
      date,
      roomType,
      period,
      totalAmount,
      payment,
      rent,
      month,
      year
    }
    dispatch(postInvoice(payload))
    .then(()=> dispatch(getInvoice()))
    .then((r)=>{
        if(r.type === GET_INVOICE_SUCCESS){
          toast({
            title: 'Invoice created Successfully',
            duration: 5000,
            position: 'top',
            isClosable: true,
            colorScheme: 'green',
            status: 'success',
          })
        }
    })
    .catch((e)=>{
      console.log(e);
    })
  }
  const handleDelete = (item) => {
    dispatch(deleteLandLord(item._id))
      .then(() => dispatch(getLandlord()))
    setColor(item._id)
  }
  const land = useSelector((state) => state.VacateNotice.invoice);
  useEffect(() => {
    if (land?.length === 0) {
      dispatch(getInvoice())
    }
  }, [land.length, dispatch])
  console.log(land);
  console.log(color)
  return (
    <div>
      <Flex minWidth='max-content' alignItems='center' gap='2' p={"15px"}>
          <Button onClick={onOpen} style={{ border: "1px solid black", width: "250px", height: "50px", marginTop: "15px", borderRadius: "5px", backgroundColor: "black", color: "white" }}>
            <BsPersonFillAdd style={{ width: "100%", fontSize: "24px", alignItems: "center", height: "100%", padding: "1px" }} />
          </Button>
          <Modal isOpen={isOpen} onClose={onClose} style={{width:"70%",padding:"30px"}}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Inovice Details of Payment For Rent</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <FormControl isRequired>
                <FormLabel>Invoice Id</FormLabel>
                <Input type='text' value={invoice} onChange={(e)=>setInvoice(e.target.value)}  placeholder='payment of Id (Invoice Number)' />
              </FormControl>
              <br />
              <FormControl isRequired>
                <FormLabel>Invoice Date</FormLabel>
                <Input type='date' value={date} onChange={(e)=>setDate(e.target.value)}  placeholder='Invoice Date' />
              </FormControl>
              <br/>
              <FormControl isRequired>
              <FormLabel>Types of Room</FormLabel>
                <Select placeholder='Types of Room' value={roomType} onChange={(e)=>setRoomType(e.target.value)}>
                  <option value="Lease">Lease</option>
                  <option value="Room">Room</option>
                </Select>
              </FormControl>
              <br />
              <FormControl isRequired>
              <FormLabel>Period (Payment)</FormLabel>
                <Input type='text' value={period} onChange={(e)=>setPeriod(e.target.value)}  placeholder='period' />
              </FormControl>
              <br/>
              <FormControl isRequired>
              <FormLabel>TotalAmount</FormLabel>
                <Input type='text' value={totalAmount} onChange={(e)=>setTotalAmount(e.target.value)}  placeholder='TotalAmount' />
              </FormControl>
              <br/>
              <FormControl isRequired>
              <FormLabel>PaymentStatus</FormLabel>
                <Select   placeholder='PaymentStatus' value={payment} onChange={(e)=>setPayment(e.target.value)} > 
                <option value="Paid">Paid</option>
                <option value="Due">Due</option>
                </Select>
              </FormControl>
              <br/>
              <FormControl isRequired>
                <FormLabel>Month</FormLabel>
              <Select placeholder='Select Month' value={month} onChange={(e)=>setMonth(e.target.value)}>
                <option value='January'>January</option>
                <option value='February'>February</option>
                <option value='March'>March</option>
                <option value='April'>April</option>
                <option value='May'>May</option>
                <option value='June'>June</option>
                <option value='July'>July</option>
                <option value='August'>August</option>
                <option value='September'>September</option>
                <option value='October'>October</option>
                <option value='November'>November</option>
                <option value='December'>December</option>
                </Select>
                </FormControl>
              <br/>
              <FormControl isRequired>
                <FormLabel>Year</FormLabel>
               <Select placeholder='Select Year' value={year} onChange={(e)=>setYear(e.target.value)}>
                <option value='2013'>2013</option>
                <option value='2014'>2014</option>
                <option value='2015'>2015</option>
                <option value='2016'>2016</option>
                <option value='2017'>2017</option>
                <option value='2018'>2018</option>
                <option value='2019'>2019</option>
                <option value='2020'>2020</option>
                <option value='2021'>2021</option>
                <option value='2022'>2022</option>
                <option value='2023'>2023</option>
                <option value='2024'>2024</option>
                </Select>
                </FormControl>
              <br/>
              <FormControl isRequired>
              <FormLabel>Rent</FormLabel>
                <Input type='text' value={rent} onChange={(e)=>setRent(e.target.value)}  placeholder='Rent' />
              </FormControl>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button  onClick={handleAddInvoice}  colorScheme='red'>Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        <Spacer />
        <Box style={{ width: "500px", border: "0px" }}>
          <Input type="text" placeholder='filter using first name of user '
            value={landlordFilter}
            onChange={handleFilter} />
        </Box>
      </Flex>
      <Box style={{ marginTop: "15px", padding: "20px" }}>
        <TableContainer>
          <Table variant='striped' colorScheme='teal'>
            <TableCaption></TableCaption>
            <Thead>
              <Tr>
                <Th>Invoice Number</Th>
                <Th>Invoice Date</Th>
                <Th>RoomType</Th>
                <Th>Period</Th>
                <Th>TotalAmount</Th>
                <Th>PaymentStatus</Th>
                <Th> Rent</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                land.length > 0 && land.map((item)=>(
                  <Tr key={item._id}>
                  <Td >{item.invoice}</Td>
                  <Td>{item.date}</Td>
                  <Td>{item.roomType}</Td>
                  <Td>{item.period}</Td>
                  <Td>{item.totalAmount}</Td>
                  <Td>{item.payment === "Paid"? (<Text style={{width:"60px",height:"30px",backgroundColor:"green",color:"white",fontSize:"24px",textAlign:'center',fontWeight:"bold"}}>Paid</Text>): (<Text style={{width:"60px",height:"30px",backgroundColor:"red",color:"white",fontSize:"24px",textAlign:'center',fontWeight:"bold"}}>Due</Text>)}</Td>
                  <Td>{item.rent}</Td>
                  <Td>Status</Td>
                </Tr>
                ))
              } 
            </Tbody>
          </Table>
        </TableContainer>

      </Box>
    </div>
  )
}

export default Invoices