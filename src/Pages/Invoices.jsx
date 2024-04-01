import { Box,Text, FormControl, FormLabel, Input, Select, Spacer, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';
import { BsPersonFillAdd } from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux';
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
import { deleteInvoice, getInvoice, postInvoice } from '../Redux/VacateNotice/action';
import { GET_INVOICE_SUCCESS } from '../Redux/VacateNotice/actionTypes';
import { getTentants } from '../Redux/Tentants/action';
const Invoices = () => {
  const dispatch = useDispatch();
  const [color, setColor] = useState(null);
  const [landlordFilter, setLandlordFilter] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [invoice,setInvoice]=useState("");
  const [apartmentName,setApartmentName]=useState("");
  const [apartmentAddress,setApartmentAddresss]=useState("");
  const [ownerPhone,setOwnerPhone]=useState("");
  const [ownerEmail,setOwnerEmail]=useState("");
  const [water,setWater]=useState("");
  const [electricity,setElectricity]=useState("");
  const [username,setUsername]=useState("");
  const [userAddress,setUserAddress]=useState("");
  const [userPhone,setUserPhone]=useState("");
  const [apartmentImage, setApartmentImage] = useState("");
  const [date,setDate]=useState("");
  const [apartmentType, setApartmentType] = useState("");
  // const [period,setPeriod]=useState("");
  const [totalAmount,setTotalAmount]=useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [rent,setRent]=useState("");
  const [month,setMonth]=useState("");
  const [year,setYear]=useState("");
  const user = useSelector((state) => state.Tentants.tentants);
  const handleFilter = (e) => {
    setLandlordFilter(e.target.value)
  }
 const View = (id) => {
   let route = "";
   if (location.pathname === "/superAdmin/invoices") {
     route = `/superAdmin/viewInvoice/${id}`;
   } else if (location.pathname === "/owner-dashboard/invoices") {
     route = `/owner-dashboard/viewInvoice/${id}`;
   } 
   navigate(route);
 };

 const edit = (id) => {
   let route = "";
   if (location.pathname === "/superAdmin/invoices") {
     route = `/superAdmin/invoice/${id}/edit`;
   } else if (location.pathname === "/owner-dashboard/invoices") {
     route = `/owner-dashboard/invoice/${id}/edit`;
   } 
   navigate(route);
 };

  const handleDelete = (item) => {
    dispatch(deleteInvoice(item._id))
      .then(() => dispatch(getInvoice()))
    setColor(item._id)
  }
  const handleAddInvoice=()=>{
    const payload = {
      apartmentName,
      apartmentImage,
      apartmentAddress,
      ownerEmail,
      ownerPhone,
      invoice,
      date,
      apartmentType,
      username,
      userAddress,
      userPhone,
      totalAmount,
      paymentStatus,
      water,
      electricity,
      month,
      year,
      rent,
    };
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
  const land = useSelector((state) => state.VacateNotice.invoice);
  useEffect(() => {
    if (land?.length === 0) {
      dispatch(getInvoice())
    }
    else if(user?.length === 0){
      dispatch(getTentants())
    }

  }, [land?.length,user?.length, dispatch]);
  return (
    <div>
      <Flex minWidth="max-content" alignItems="center" gap="2" p={"15px"}>
        <Button
          onClick={onOpen}
          style={{
            border: "1px solid black",
            width: "100px",
            height: "50px",
            marginTop: "15px",
            borderRadius: "5px",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <BsPersonFillAdd
            style={{
              width: "100%",
              fontSize: "24px",
              alignItems: "center",
              height: "100%",
              padding: "1px",
            }}
          />
        </Button>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          style={{ width: "100%", padding: "10px" }}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Inovice Details of Payment For Rent</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box>
                <FormControl isRequired>
                  <FormLabel>Apartment-Name</FormLabel>
                  <Input
                    type="text"
                    value={apartmentName}
                    onChange={(e) => setApartmentName(e.target.value)}
                    placeholder="Apartment-Name"
                  />
                </FormControl>
                <br />
                <FormControl isRequired>
                  <FormLabel>Apartment-Address</FormLabel>
                  <Input
                    type="text"
                    value={apartmentAddress}
                    onChange={(e) => setApartmentAddresss(e.target.value)}
                    placeholder="Address"
                  />
                </FormControl>
                <br />
                <FormControl isRequired>
                  <FormLabel>Owner-Email:</FormLabel>
                  <Input
                    type="text"
                    value={ownerEmail}
                    onChange={(e) => setOwnerEmail(e.target.value)}
                    placeholder="Owner-Email"
                  />
                </FormControl>
                <br />
                <FormControl isRequired>
                  <FormLabel>Owner-phone:</FormLabel>
                  <Input
                    type="text"
                    value={ownerPhone}
                    onChange={(e) => setOwnerPhone(e.target.value)}
                    placeholder="Owner-phone"
                  />
                </FormControl>
                <br />
                <FormControl isRequired>
                  <FormLabel>WaterBill:</FormLabel>
                  <Input
                    type="text"
                    value={water}
                    onChange={(e) => setWater(e.target.value)}
                    placeholder="Owner-phone"
                  />
                </FormControl>
                <br />
                <FormControl isRequired>
                  <FormLabel>Electricity-Bill:</FormLabel>
                  <Input
                    type="text"
                    value={electricity}
                    onChange={(e) => setElectricity(e.target.value)}
                    placeholder="Owner-phone"
                  />
                </FormControl>
                <br />
                <FormControl isRequired>
                  <FormLabel>Apartment-Image:</FormLabel>
                  <Input
                    type="url"
                    value={apartmentImage}
                    onChange={(e) => setApartmentImage(e.target.value)}
                    placeholder="Apartment-Image"
                  />
                </FormControl>
                <br />
                <FormControl isRequired>
                  <FormLabel>Invoice Id</FormLabel>
                  <Input
                    type="text"
                    value={invoice}
                    onChange={(e) => setInvoice(e.target.value)}
                    placeholder="payment of Id (Invoice Number)"
                  />
                </FormControl>
                <br />
                <FormControl isRequired>
                  <FormLabel>Invoice Date</FormLabel>
                  <Input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="Invoice Date"
                  />
                </FormControl>
                <br />
                <FormControl isRequired>
                  <FormLabel>Apartment</FormLabel>
                  <Select
                    placeholder="ApartmentType"
                    value={apartmentType}
                    onChange={(e) => setApartmentType(e.target.value)}
                  >
                    <option value="1BHK">1BHK</option>
                    <option value="2BHK">2BHK</option>
                  </Select>
                </FormControl>
                <br />
                {/* <FormControl isRequired>
                  <FormLabel>Period (Payment)</FormLabel>
                  <Input
                    type="text"
                    value={period}
                    onChange={(e) => setPeriod(e.target.value)}
                    placeholder="period"
                  />
                </FormControl>
                <br /> */}
                <FormControl isRequired>
                  <FormLabel>TotalAmount</FormLabel>
                  <Input
                    type="text"
                    value={totalAmount}
                    onChange={(e) => setTotalAmount(e.target.value)}
                    placeholder="TotalAmount"
                  />
                </FormControl>
                <br />
                <FormControl isRequired>
                  <FormLabel>PaymentStatus</FormLabel>
                  <Select
                    placeholder="PaymentStatus"
                    value={paymentStatus}
                    onChange={(e) => setPaymentStatus(e.target.value)}
                  >
                    <option value="Paid">Paid</option>
                    <option value="Due">Due</option>
                  </Select>
                </FormControl>
                <br />
                <FormControl isRequired>
                  <FormLabel>Month</FormLabel>
                  <Select
                    placeholder="Select Month"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                  >
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </Select>
                </FormControl>
                <br />
                <FormControl isRequired>
                  <FormLabel>UserName</FormLabel>
                  <Select
                    placeholder="userName"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  >
                    {user?.length > 0 &&
                      user.map((item) => (
                        <option value={item.firstName}>
                          {item.firstName + " " + item.lastName}
                        </option>
                      ))}
                  </Select>
                </FormControl>
                <br />
                <FormControl isRequired>
                  <FormLabel>User-Address</FormLabel>
                  <Input
                    placeholder="User-Address"
                    value={userAddress}
                    onChange={(e) => setUserAddress(e.target.value)}
                  />
                </FormControl>
                <br />
                <FormControl isRequired>
                  <FormLabel>Year</FormLabel>
                  <Select
                    placeholder="Select Year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  >
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                  </Select>
                </FormControl>
                <br />
                <FormControl isRequired>
                  <FormLabel>UserPhone</FormLabel>
                  <Input
                    placeholder="Select Year"
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value)}
                  />
                </FormControl>
                <br />
                <FormControl isRequired>
                  <FormLabel>Rent</FormLabel>
                  <Input
                    type="text"
                    value={rent}
                    onChange={(e) => setRent(e.target.value)}
                    placeholder="Rent"
                  />
                </FormControl>
              </Box>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button onClick={handleAddInvoice} colorScheme="red">
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Spacer />
        <Box style={{ width: "500px", border: "0px" }}>
          <Input
            type="text"
            placeholder="filter using first name of user "
            value={landlordFilter}
            onChange={handleFilter}
          />
        </Box>
      </Flex>
      <Box style={{ marginTop: "15px", padding: "40px" }}>
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <TableCaption></TableCaption>
            <Thead>
              <Tr>
                <Th>Invoice Number</Th>
                <Th>Invoice Date</Th>
                <Th>RoomType</Th>
                <Th>TotalAmount</Th>
                <Th>PaymentStatus</Th>
                <Th> Rent</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {land.length > 0 &&
                land.map((item) => (
                  <Tr key={item._id}>
                    <Td>{item.invoice}</Td>
                    <Td>{item.date}</Td>
                    <Td>{item.apartmentType}</Td>
                    <Td>{item.totalAmount}</Td>
                    <Td>
                      {item.paymentStatus === "Paid" ? (
                        <Text
                          style={{
                            width: "60px",
                            height: "30px",
                            backgroundColor: "green",
                            color: "white",
                            fontSize: "24px",
                            textAlign: "center",
                            fontWeight: "bold",
                          }}
                        >
                          Paid
                        </Text>
                      ) : (
                        <Text
                          style={{
                            width: "60px",
                            height: "30px",
                            backgroundColor: "red",
                            color: "white",
                            fontSize: "24px",
                            textAlign: "center",
                            fontWeight: "bold",
                          }}
                        >
                          Due
                        </Text>
                      )}
                    </Td>
                    <Td>{item.rent}</Td>
                    <Flex>
                      <Td>
                        <Button onClick={() => View(`${item._id}`)}>
                          <ChevronDownIcon />
                        </Button>
                      </Td>
                      <Td>
                        <Button onClick={() => edit(`${item._id}`)}>
                          <EditIcon />
                        </Button>
                      </Td>
                      <Td>
                        <Button onClick={() => handleDelete(item)}>
                          <DeleteIcon
                            style={{
                              color: color === item._id ? "green" : "red",
                            }}
                          />
                        </Button>
                      </Td>
                    </Flex>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}

export default Invoices