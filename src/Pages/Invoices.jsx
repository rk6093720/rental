import { Box, FormControl, FormLabel, Input, Select, Spacer, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
const Invoices = () => {
  const dispatch = useDispatch();
  const [color, setColor] = useState(null);
  const [landlordFilter, setLandlordFilter] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [invoice,setInvoice]=useState("");
  const [date,setDate]=useState("");
  const [roomType,setRoomType]=useState("");
  const [period,setPeriod]=useState("");
  const [totalAmount,setTotalAmount]=useState("");
  const [payment,setPayment]=useState("");
  const [rent,setRent]=useState("");
  const handleFilter = (e) => {
    setLandlordFilter(e.target.value)
  }
  const handleAddInvoice=()=>{
    

  }
  const handleDelete = (item) => {
    dispatch(deleteLandLord(item._id))
      .then(() => dispatch(getLandlord()))
    setColor(item._id)
  }
  const land = useSelector((state) => state.App.landlord);
  useEffect(() => {
    if (land?.length === 0) {
      dispatch(getLandlord())
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
          <Modal isOpen={isOpen} onClose={onClose}>
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
                <Th>Lease</Th>
                <Th>Period</Th>
                <Th>TotalAmount</Th>
                <Th>PaymentStatus</Th>
                <Th> Rent</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Invoice Number</Td>
                <Td>Invoice Date</Td>
                <Td>Lease</Td>
                <Td>Period</Td>
                <Td>Amount</Td>
                <Td>Paid</Td>
                <Td>Balance</Td>
                <Td>Status</Td>
              </Tr>

              {
                land?.length > 0 && land?.map((item) => {
                  return <Tr key={item._id}>
                    <Td>{item.firstName}</Td>
                    <Td>{item.LastName}</Td>
                    <Td>{item.email}</Td>
                    <Td>{item.phone}</Td>
                    <Flex>
                      <Td>
                        <Link to={`/viewLandlord/${item._id}`}>
                          <ChevronDownIcon />
                        </Link>
                      </Td>
                      <Td>
                        <Link to={`/landlord/${item._id}/edit`}>
                          <EditIcon />
                        </Link>
                      </Td>
                      <Td>
                        <Button onClick={() => handleDelete(item)}>
                          <DeleteIcon style={{ color: color === item._id ? "green" : "red" }} />
                        </Button>
                      </Td>
                    </Flex>
                  </Tr>
                })
              }
            </Tbody>
          </Table>
        </TableContainer>

      </Box>
    </div>
  )
}

export default Invoices