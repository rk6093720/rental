import { Box, Input, Spacer } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsPersonFillAdd } from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux';
import { ChevronDownIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Button, Flex, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { deletePayment, getPayment } from '../Redux/Payment/action';
const Payment = () => {
  const dispatch = useDispatch();
  const [color, setColor] = useState(null);
  const [landlordFilter, setLandlordFilter] = useState("");
  const handleFilter = (e) => {
    setLandlordFilter(e.target.value)
  }
  // const navigate = useNavigate();
  const handleDelete = (item) => {
    dispatch(deletePayment(item._id))
      .then(() => dispatch(getPayment()))
    setColor(item._id)
  }
  const payment = useSelector((state) => state.Payment.paymentsapp);
  useEffect(() => {
    if (payment?.length === 0) {
      dispatch(getPayment())
    }
  }, [payment.length, dispatch])
  console.log(payment);
  console.log(color)
  return (
    <div>
      <Flex minWidth='max-content' alignItems='center' gap='2'>
        <Link to="/AddPayment">
          <Box style={{ border: "1px solid black", width: "250px", height: "50px", marginTop: "15px", borderRadius: "5px", backgroundColor: "black", color: "white" }}>
            <BsPersonFillAdd style={{ width: "100%", fontSize: "24px", alignItems: "center", height: "100%", padding: "1px" }} />
          </Box>
        </Link>
        <Spacer />
        <Box style={{ width: "500px", border: "0px" }}>
          <Input type="text" placeholder='filter using first name of user '
            value={landlordFilter}
            onChange={handleFilter} />
        </Box>
      </Flex>
      <Box style={{ marginTop: "15px", padding: "2px" }}>
        <TableContainer>
          <Table variant='striped' colorScheme='teal'>
            <TableCaption></TableCaption>
            <Thead>
              <Tr>
                <Th>Tentant</Th>
                <Th>Lease</Th>
                <Th>Amount</Th>
                <Th>paymentMethod</Th>
                <Th>paymentDate</Th>
                <Th>Property</Th>
                <Th>ReciptNumber</Th>
                <Th>Status</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                payment?.length > 0 && payment?.map((item) => {
                  return <Tr key={item._id}>
                    <Td>{item.paymentTentant}</Td>
                    <Td>{item.paymentLease}</Td>
                    <Td>{item.amount}</Td>
                    <Td>{item.paymentMethod}</Td>
                    <Td>{item.paymentDate}</Td>
                    <Td>property</Td>
                    <Td>Recipt Number</Td>
                    <Td>Status</Td>
                    <Flex>
                      <Td>
                        <Link to={`/viewPayment/${item._id}`}>
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

export default Payment