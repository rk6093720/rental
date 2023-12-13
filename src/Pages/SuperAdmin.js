import React, { useEffect, useState } from 'react'
import { Heading,Box,Text,Flex,Spacer,Button,Switch} from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import { BsPersonFillAdd } from "react-icons/bs"
import { useNavigate } from 'react-router-dom';
import { useDispatch ,useSelector} from 'react-redux';
import { 
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import {  DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { deleteLandLord, getLandlord } from '../Redux/App/action';
const SuperAdmin = () => {
  const [superAdmin] = useState(JSON.parse(localStorage.getItem("token"))) 
  console.log(superAdmin.token.email.split("@")[0]);
  const [change,setChange]= useState(true);
  const admin = useSelector((state) => state.App.landlord);
  const dispatch=useDispatch();
  const [color, setColor] = useState(null);
  const navigate=useNavigate();
  const handleSignout =()=>{
    localStorage.removeItem("token");
    navigate("/adminSignup")
  }
  const handleAdd = ()=>{
    navigate("/AddLandlord")
  }
  const handleDelete = (item) => {
    dispatch(deleteLandLord(item._id))
      .then(() => dispatch(getLandlord()))
    setColor(item._id)
  }
  const handleSwitch=(newStatus)=>{
        setChange(!newStatus)
  }
  useEffect(()=>{
    if(admin.length === 0)
    {
      dispatch(getLandlord())
    }
  },[dispatch,admin.length])
  console.log(change)
  return (
    <div>
        <Box style={{
            width:"100%",
        height:"50px",
        display:"flex",
        justifyContent:"space-between",
        backgroundColor:"teal",
        color:"white"
        }}>
          <Box style={{
            width:"20%",
            height:"100%",
                  }}>
          <Heading> Apartment</Heading>
          </Box>
        <Box style={{
          width: "80%",
          height: "100%",
          display:"flex",
          justifyContent:"space-between"
        }}>
          <Box style={{ width:"20%",height:"100%", fontSize:"24px",fontWeight:"bold", alignItems:"center",marginLeft:"65%" }}>
           {
            superAdmin ?<>
              <Flex><Text >{"Super" + superAdmin.token.email.split("@")[0]}</Text>&nbsp;|&nbsp; <Text cursor={"pointer"}
                onClick={handleSignout}>SignOut</Text></Flex></> : <Link to='/adminLogin'>Login</Link> 
           } 
          </Box> 
        </Box>
        </Box>
        <Flex>
        <Box p='6' mt="5px" bg='red.500' w='200px' fontSize="24px" color="white" ml="15px">
          <Link to="/dashboard">
            Admin Dashboard
          </Link>
          </Box>
          <Spacer/>
        <Box p='6' mt="5px" w='200px' bg='green.500' mr="15px">
          <Button onClick={handleAdd}><BsPersonFillAdd/></Button>
        </Box>
        </Flex>
        <hr/>
      <TableContainer mt="5px">
        <Table variant='striped' colorScheme='teal' >
          <Thead border="1px solid black">
            <Tr border="1px solid black">
              <Th border='1px solid black'>ID</Th>
              <Th border="1px solid black">Name</Th>
              <Th border="1px solid black">Email</Th>
              <Th border="1px solid black">Status</Th>
              <Th border="1px solid black">Action</Th>
            </Tr>
          </Thead>
          <Tbody border="1px solid black">
            {
              admin.length > 0 && admin.map((item, index)=>(
                <Tr border="1px solid black" key={item._id}>
                  <Td border='1px solid black'>{item._id}</Td>
                  <Td border="1px solid black">{item.firstName + " " + item.LastName}</Td>
                  <Td border="1px solid black">{item.email}</Td>
                  <Td border="1px solid black">
                    {!change ? <>
                      <Switch size="lg"
                        defaultChecked={item.status}
                        onChange={() => handleSwitch(!item.status)}
                      />
                      InActive
                    </> : <>
                      <Switch size="lg"
                        defaultChecked={item.status}
                        onChange={() => handleSwitch( item.status)}
                      /> Active</>}
                  </Td>
                  <Flex border="1px solid black">
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
              ))
            }
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default SuperAdmin