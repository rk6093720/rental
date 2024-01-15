import { Box, Input, Spacer } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsPersonFillAdd } from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux';
import { ChevronDownIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Button, Flex, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { deleteUtility, getUtility } from '../Redux/Utility/action';
const Utlility = () => {
  const dispatch = useDispatch();
  const [color, setColor] = useState(null);
  const [landlordFilter, setLandlordFilter] = useState("");
   const navigate = useNavigate();
   const location = useLocation();
  const handleFilter = (e) => {
    setLandlordFilter(e.target.value)
  }
  const handleAdd = ()=>{
    if(location.pathname === "/tentant-dashboard/utilities"){
        navigate("/tentant-dashboard/AddUtility")
    }
  }
  const View = (id)=>{
    if(location.pathname === "/superAdmin/utilities"){
      navigate(`/superAdmin/viewUtility/${id}`)
    }
     else if(location.pathname === "/owner-dashboard/utilities"){
      navigate(`/owner-dashboard/viewUtility/${id}`)
    }
  }
  const edit =(id)=>{
    if(location.pathname === "/superAdmin/utilities"){
      navigate(`/superAdmin/utility/${id}/edit`)
    }else if(location.pathname === "/owner-dashboard/utilities"){
      navigate(`/owner-dashboard/utility/${id}/edit`)
    }
  }
  const handleDelete = (item) => {
    dispatch(deleteUtility(item._id))
      .then(() => dispatch(getUtility()))
    setColor(item._id)
  }
  const utilitiesLand = useSelector((state) => state.Utility.utilities);
  useEffect(() => {
    if (utilitiesLand?.length === 0) {
      dispatch(getUtility())
    }
  }, [utilitiesLand?.length, dispatch])
  console.log(utilitiesLand);
  console.log(color)
  return (
    <div>
      <Flex minWidth='max-content' alignItems='center' gap='2' p={"15px"}>
          <Button  onClick={handleAdd} style={{ border: "1px solid black", width: "250px", height: "50px", marginTop: "15px", borderRadius: "5px", backgroundColor: "black", color: "white" }}>
            <BsPersonFillAdd style={{ width: "100%", fontSize: "24px", alignItems: "center", height: "100%", padding: "1px" }} />
          </Button>
        <Spacer />
        <Box style={{ width: "500px", border: "0px"}}>
          <Input type="text" placeholder='filter using first name of user '
            value={landlordFilter}
            onChange={handleFilter} />
        </Box>
      </Flex>
      <Box style={{ marginTop: "15px", padding: "2px" ,padding:"35px"}}>
        <TableContainer>
          <Table variant='striped' colorScheme='teal'>
            <TableCaption></TableCaption>
            <Thead>
              <Tr>
                <Th>Reading</Th>
                <Th>Utility</Th>
                <Th>Reading Date</Th>
                <Th>propertyname</Th>
                <Th>unit</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                utilitiesLand?.length > 0 && utilitiesLand?.map((item) => (
               <Tr key={item._id}>
                    <Td>
                    {
                      utilitiesLand.map((item,index)=>(
                        item.manual.map((secondItem,secondIndex)=>(
                          <div key={index + secondIndex}>
                               <div>{secondItem.reading}</div>
                           </div>
                        ))
                      ))
                    }
                    </Td>
                    <Td>{item.utilityname}</Td>
                   <Td> {
                      utilitiesLand.map((item, index) => (
                        item.manual.map((secondItem, secondIndex) => (
                          <div key={index + secondIndex}>
                            <div>{secondItem.date.split("T")[0]}</div>
                          </div>
                        ))
                      ))
                    }</Td>
                    <Td>{item.propertyname}</Td>
                    <Td>
                      {
                        utilitiesLand.map((item, index) => (
                          item.manual.map((secondItem, secondIndex) => (
                            <div key={index + secondIndex}>
                              <div>{secondItem.unit}</div>
                            </div>
                          ))
                        ))
                      }
                    </Td>
                    
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
                ))
              }
            </Tbody>
          </Table>
        </TableContainer>

      </Box>
    </div>
  )
}

export default Utlility