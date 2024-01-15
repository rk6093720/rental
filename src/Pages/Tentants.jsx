import { Box, Input, Spacer } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BsPersonFillAdd } from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux';
import { ChevronDownIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Button, Flex, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { deleteTentants, getTentants } from '../Redux/Tentants/action';
const Tentants = () => {
  const dispatch = useDispatch();
  const [color, setColor] = useState(null);
  const [tentantsFilter, setTentantsFilter] = useState("");
  const tentant = useSelector((state) => state.Tentants.tentants);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname);
  // const handleAdd=()=>{
  //       if(location.pathname === "/superAdmin/tentants"){
  //         navigate("/superAdmin/AddTentants")
  //       }
  //       else if(location.pathname === "/owner-dashboard/tentants")
  //       {
  //         navigate("/owner-dashboard/AddTentants")
  //       }else{
  //         navigate("/tentant-dashboard/AddTentants")
  //       }
  // }
  const View = (id)=>{
    if(location.pathname === "/superAdmin/tentants"){
      navigate(`/superAdmin/viewTentants/${id}`)
    }
     else if(location.pathname === "/tentant-dashboard/tentants"){
      navigate(`/tentant-dashboard/viewTentants/${id}`)
    }else{
      navigate(`/owner-dashboard/viewTentants/${id}`)
    }
  }
  const edit =(id)=>{
    if(location.pathname === "/superAdmin/tentants"){
      navigate(`/superAdmin/tentant/${id}/edit`)
    }else if(location.pathname === "/tentant-dashboard/tentants"){
      navigate(`/tentant-dashboard/tentant/${id}/edit`)
    }else{
      navigate(`/owner-dashboard/tentant/${id}/edit`)
    }
  }
  const handleFilter = (e) => {
    setTentantsFilter(e.target.value)
  }
  const handleDelete = (item) => {
    dispatch(deleteTentants(item._id))
    setColor(item._id)
  }
  
  useEffect(() => {
    if (tentant?.length === 0) {
      dispatch(getTentants())
    }
  }, [tentant?.length, dispatch])
  console.log(tentant, "tentant");
  console.log(color)
  return (
    <div>
      <Flex minWidth='max-content' alignItems='center' gap='2' p={"15px"}>
          {/* <Button onClick={handleAdd} style={{ border: "1px solid black", width: "250px", height: "50px", marginTop: "15px", borderRadius: "5px", backgroundColor: "black", color: "white" }}>
            <BsPersonFillAdd style={{ width: "100%", fontSize: "24px", alignItems: "center", height: "100%", padding: "1px" }} />
          </Button> */}
        <Spacer />
        <Box style={{ width: "500px", border: "0px" }}>
          <Input type="text" placeholder='filter using first name of user '
            value={tentantsFilter}
            onChange={handleFilter} />
        </Box>
      </Flex>
      <Box style={{ marginTop: "15px", padding: "25px" }}>
        <TableContainer>
          <Table variant='striped' colorScheme='teal'>
            <TableCaption></TableCaption>
            <Thead>
              <Tr>
                <Th>FirstName</Th>
                <Th>LastName</Th>
                <Th>Email</Th>
                <Th>phone</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                tentant?.length > 0 && tentant?.map((item) => (
                   <Tr key={item._id}>
                    <Td>{item.firstName}</Td>
                    <Td>{item.lastName}</Td>
                    <Td>{item.email}</Td>
                    <Td>{item.phone}</Td>
                    <Flex>
                      <Td>
                        <Button onClick={()=>View(`${item._id}`)}>
                          <ChevronDownIcon />
                        </Button>
                      </Td>
                      <Td>
                        <Button onClick={()=>edit(`${item._id}`)}>
                          <EditIcon />
                        </Button>
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
      </Box>
    </div>
  )
}
export default Tentants