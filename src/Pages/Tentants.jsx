import { Box, Input, Spacer } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
  const handleAdd=()=>{
        if(location.pathname === "/superAdmin/tentants"){
          navigate("/superAdmin/AddTentants")
        }
        else if(location.pathname === "/owner-dashboard/tentants")
        {
          navigate("/owner-dashboard/AddTentants")
        }else{
          navigate("/tentant-dashboard/AddTentants")
        }
  }
  const handleFilter = (e) => {
    setTentantsFilter(e.target.value)
  }
  // const navigate = useNavigate();
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
      <Flex minWidth='max-content' alignItems='center' gap='2'>
          <Button onClick={handleAdd} style={{ border: "1px solid black", width: "250px", height: "50px", marginTop: "15px", borderRadius: "5px", backgroundColor: "black", color: "white" }}>
            <BsPersonFillAdd style={{ width: "100%", fontSize: "24px", alignItems: "center", height: "100%", padding: "1px" }} />
          </Button>
        <Spacer />
        <Box style={{ width: "500px", border: "0px" }}>
          <Input type="text" placeholder='filter using first name of user '
            value={tentantsFilter}
            onChange={handleFilter} />
        </Box>
      </Flex>
      <Box style={{ marginTop: "15px", padding: "2px" }}>
        <TableContainer>
          <Table variant='striped' colorScheme='teal'>
            <TableCaption></TableCaption>
            <Thead>
              <Tr>
                <Th>FirstName</Th>
                <Th>LastName</Th>
                <Th>Gender</Th>
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
                    <Td>{item.gender}</Td>
                    <Td>{item.phone}</Td>
                    <Flex>
                      <Td>
                        <Link to={`/viewTentants/${item._id}`}>
                          <ChevronDownIcon />
                        </Link>
                      </Td>
                      <Td>
                        <Link to={`/tentant/${item._id}/edit`}>
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
      </Box>
    </div>
  )
}
export default Tentants