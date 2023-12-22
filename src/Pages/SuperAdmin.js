import React, { useEffect, useState } from 'react'
import { Box,Flex,Spacer,Button,Switch} from "@chakra-ui/react"
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
import Navbar from '../Component/Navbar';
const SuperAdmin = () => {
  const [change,setChange]= useState(null);
  const admin = useSelector((state) => state.App.landlord);
  const dispatch=useDispatch();
  const [color, setColor] = useState(null);
  const navigate=useNavigate();
  const handleAdd = ()=>{
    navigate("/AddLandlord")
  }
  const handleAdmin = ()=>{
    navigate("/owner-login");
    window.location.reload()
  }
  const handleDelete = (item) => {
    dispatch(deleteLandLord(item._id))
      .then(() => dispatch(getLandlord()))
    setColor(item._id)
  }
  const handleSwitch=(id,newStatus)=>{
    const data = admin.map((item)=>(
      item._id === id ? {status: !newStatus} :item  
    ))
    setChange(data)
  }
  useEffect(()=>{
    if(admin.length === 0)
    {
      dispatch(getLandlord())
    }
  },[dispatch,admin.length])
  return (
    <div>
      <Navbar/>
      <Flex>
          <Button onClick={handleAdmin} p='6' mt="5px" bg='red.500' w='200px' h="100px" fontSize="24px" color="white" ml="15px">
            Admin Dashboard
          </Button>
          <Spacer/>
        <Box p='6' mt="5px" w='200px' h="100px" bg='green.500' mr="15px" borderRadius="10px">
          <Button style={{width:"100%",height:"100%"}} onClick={handleAdd}><BsPersonFillAdd  /></Button>
        </Box>
        </Flex>
        <hr/>
      <TableContainer mt="5px">
        <Table  >
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
                <Tr border="1px solid black" key={item._id }>
                  <Td border='1px solid black'>
                  <Link to={`/dashboard/${item._id}`}>{item._id ? index + 1:item._id}</Link>
                  </Td>
                  <Td border="1px solid black">{item.firstName + " " + item.LastName}</Td>
                  <Td border="1px solid black">{item.email}</Td>
                  <Td border="1px solid black">
                  <Switch size="lg"
                        defaultChecked={item.status}
                        onChange={() => handleSwitch(item._id, !item.status)}
                      /> 
                    {change && item.status  ?  "InActive": "Active"}
                  </Td>
                  <Td border="1px solid black">
                  <Flex >
                    <Box width={"50px"} height={"100%"}>
                      <Link to={`/landlord/${item._id}/edit`}>
                        <EditIcon />
                      </Link>
                      </Box>
                      <Box width={"50px"} height={"100%"}>
                      <Button onClick={() => handleDelete(item)}>
                        <DeleteIcon style={{ color: color === item._id ? "green" : "red" }} />
                      </Button>
                      </Box>
                  </Flex>
                  </Td>
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