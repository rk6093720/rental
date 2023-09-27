import { Box, Button, Flex, Input, Spacer, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { BsPersonFillAdd } from "react-icons/bs"
import { ChevronDownIcon, EditIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getLandlord } from '../Redux/App/action';
const Landlord = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const land = useSelector((state) => state.App.landlord);
  const handleView = (id)=>{
    navigate("/viewlandlord")
  }
  useEffect(()=>{
    dispatch(getLandlord())
  },[])
 

  return (
    <div>
      <Flex minWidth='max-content' alignItems='center' gap='2'>
       <Link to="/AddLandlord"> 
          <Box  style={{ border: "1px solid black", width: "250px", height: "50px", marginTop: "15px",borderRadius:"5px", backgroundColor:"black" , color:"white"}}>
            <BsPersonFillAdd style={{ width:"100%",fontSize:"24px", alignItems:"center",height:"100%",padding:"1px"}}/>
          </Box>
        </Link> 
       <Spacer/>
        <Box style={{ border: "1px solid black",width:"200px" }}>
          <Input type="text" placeholder='filter using first name of user '/>
          </Box>
      </Flex>
      <Box style={{marginTop:"15px", padding:"2px"}}>
        <TableContainer>
          <Table variant='striped' colorScheme='teal'>
            <TableCaption></TableCaption>
            <Thead>
              <Tr>
                <Th>FirstName</Th>
                <Th>LastName</Th>
                <Th>Email</Th>
                <Th>PhoneNumber</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
        {
          land.map((item)=>{
            return <Tbody>
            <Tr>
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
              </Flex>
            </Tr>
            </Tbody>
          })
        }
          </Table>
        </TableContainer>
      </Box>
    </div>
  )
}

export default Landlord