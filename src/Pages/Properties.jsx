import { Box, Input, Spacer } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsPersonFillAdd } from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux';
import { ChevronDownIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Button, Flex, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { deleteProperty, getProperty } from '../Redux/Property/action';
const Properties = () => {
  const dispatch = useDispatch();
  const [color, setColor] = useState(null);
  const [landlordFilter, setLandlordFilter] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const handleFilter = (e) => {
    setLandlordFilter(e.target.value)
  }
  const handleAdd = ()=>{
    if(location.pathname === "/owner-dashboard/properties"){
        navigate("/owner-dashboard/AddProperty")
    }
    // AddProperty
  }
  const View = (id)=>{
    if(location.pathname === "/superAdmin/properties"){
      navigate(`/superAdmin/viewProperty/${id}`)
    }
     else if(location.pathname === "/owner-dashboard/properties"){
      navigate(`/owner-dashboard/viewProperty/${id}`)
    }
  }
  const edit =(id)=>{
    if(location.pathname === "/superAdmin/properties"){
      navigate(`/superAdmin/property/${id}/edit`)
    }else if(location.pathname === "/owner-dashboard/properties"){
      navigate(`/owner-dashboard/property/${id}/edit`)
    }
  }
  const handleDelete = (item) => {
    dispatch(deleteProperty(item._id))
    setColor(item._id)
  }
  const property = useSelector((state) => state.Property.properties);
  useEffect(() => {
    if (property?.length === 0) {
      dispatch(getProperty())
    }
  }, [property.length, dispatch])
  console.log(property,"property");
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
                <Th>PropertyCode</Th>
                <Th>PropertyName</Th>
                <Th>Location</Th>
                <Th>Unit</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                property?.length > 0 && property?.map((item) => {
                  return <Tr key={item._id}>
                    <Td>{item.propertycode}</Td>
                    <Td>{item.propertyname}</Td>
                    <Td>{item.location}</Td>
                    <Td>{item.modals.map((e)=>(e.totalRoom))}</Td>
                    <Flex>
                      <Td>
                        <Button onClick={()=> View(`${item._id}`)}>
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
                })
              }
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  )
}
export default Properties