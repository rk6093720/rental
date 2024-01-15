import { Box, Input, Spacer } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import {useLocation, useNavigate } from 'react-router-dom';
import { BsPersonFillAdd } from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux';
import { ChevronDownIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Button, Flex, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { deleteVacateNotice, getVacateNotice } from '../Redux/VacateNotice/action';
const VacateNotices = () => {
    const dispatch = useDispatch();
    const [color, setColor] = useState(null);
    const [landlordFilter, setLandlordFilter] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const handleFilter = (e) => {
      setLandlordFilter(e.target.value)
    }
    console.log(location)
    const handleAdd = ()=>{
      if(location.pathname === "/tentant-dashboard/vacateNotices"){
          navigate("/tentant-dashboard/AddVacateNotice")
      }
    }
    const View = (id)=>{
      if(location.pathname === "/superAdmin/vacateNotices"){
        navigate(`/superAdmin/viewVacateNotice/${id}`)
      }
       else if(location.pathname === "/tentant-dashboard/vacateNotices"){
        navigate(`/tentant-dashboard/viewVacateNotice/${id}`)
      }else {
        navigate(`/owner-dashboard/viewVacateNotice/${id}`)
      }
    }
    const edit =(id)=>{
      if(location.pathname === "/superAdmin/vacateNotices"){
        navigate(`/superAdmin/vacatenotice/${id}/edit`)
      }else if(location.pathname === "/tentant-dashboard/vacateNotices"){
        navigate(`/tentant-dashboard/vacatenotice/${id}/edit`)
      }else{
        navigate(`/owner-dashboard/vacatenotice/${id}/edit`)
      }
    }
    const handleDelete = (item) => {
      dispatch(deleteVacateNotice(item._id))
        .then(() => dispatch(getVacateNotice()))
      setColor(item._id)
    }
  const vacateland = useSelector((state) => state.VacateNotice.vacate);
    useEffect(() => {
      if (vacateland?.length === 0) {
        dispatch(getVacateNotice())
      }
    }, [vacateland.length, dispatch])
    console.log(vacateland);
    console.log(color)
    return (
      <div>
        <Flex minWidth='max-content' alignItems='center' gap='2' p={"10px"}>
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
        <Box style={{ marginTop: "15px", padding: "20px" }}>
          <TableContainer>
            <Table variant='striped' colorScheme='teal'>
              <TableCaption></TableCaption>
              <Thead>
                <Tr>
                  <Th>VacantDate</Th>
                  <Th>Tentant</Th>
                  <Th>Lease</Th>
                  <Th>Property</Th>
                  <Th>Unit</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {
                  vacateland?.length > 0 && vacateland?.map((item) => {
                    return <Tr key={item._id}>
                      <Td>{item.vacateDate.split("T")[0]}</Td>
                      <Td>{item.vacateTentant}</Td>
                      <Td>{item.vacateLease}</Td>
                      <Td>{item.vacateProperty}</Td>
                      <Td>{item.vacateUnit}</Td>       
                      
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
                  })
                }
              </Tbody>
            </Table>
          </TableContainer>

        </Box>
      </div>
    )
  }
export default VacateNotices