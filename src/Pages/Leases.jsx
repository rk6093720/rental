import { Box, Image, Input, Spacer } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsPersonFillAdd } from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux';
import { ChevronDownIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Button, Flex, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { deleteLease, getLease } from '../Redux/Lease/action';
const Leases = () => {
  const base = "http://localhost:8080/";
  const dispatch = useDispatch();
  const [color, setColor] = useState(null);
  const [landlordFilter, setLandlordFilter] = useState("");
   const navigate = useNavigate();
   const location = useLocation();
  const handleFilter = (e) => {
    setLandlordFilter(e.target.value)
  }
  const handleAdd = ()=>{
    if(location.pathname === "/superAdmin/leases"){
      navigate("/superAdmin/AddLease")
    }
    else if(location.pathname === "/tentant-dashboard/leases"){
        navigate("/tentant-dashboard/AddLease")
    }else{
      navigate("/owner-dashboard/AddLease")
    }
  }
  const View = (id)=>{
    if(location.pathname === "/superAdmin/leases"){
      navigate(`/superAdmin/viewLease/${id}`)
    }
     else if(location.pathname === "/tentant-dashboard/leases"){
      navigate(`/tentant-dashboard/viewLease/${id}`)
    }else{
      navigate(`/owner-dashboard/viewLease/${id}`)
    }
  }
  const edit =(id)=>{
    if(location.pathname === "/superAdmin/leases"){
      navigate(`/superAdmin/lease/${id}/edit`)
    }else if(location.pathname === "/tentant-dashboard/leases"){
      navigate(`/tentant-dashboard/lease/${id}/edit`)
    }else{
      navigate(`/owner-dashboard/lease/${id}/edit`)
    }
  }
  const handleDelete = (item) => {
    dispatch(deleteLease(item._id))
      .then(() => dispatch(getLease()))
    setColor(item._id)
  }
  const isLoading = useSelector((state) => state.Lease.leases)
  const LandLord = useSelector((state) => state.App.landlord)
  const leases = useSelector((state) => state.Lease.leases);
  useEffect(() => {
    if (leases?.length === 0) {
      dispatch(getLease())
    }
  }, [leases.length, dispatch])
  console.log(leases);
  console.log(color)
  return (
    <div>
      <Flex minWidth='max-content' alignItems='center' gap='2' p={"15px"}>
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
      <Box style={{ marginTop: "15px", padding: "25px" }}>
        <TableContainer>
          <Table variant='striped' colorScheme='teal'>
            <TableCaption></TableCaption>
            <Thead>
              <Tr>
                <Th>LeaseNumber</Th>
                <Th>PropertyCode</Th>
                <Th>Unit</Th>
                <Th>Rent</Th>
                <Th>StartDate</Th>
                <Th>LastDate</Th>
                <Th>Status</Th>
                <Th>Statement</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                leases?.length > 0 && leases?.map((item) => {
                  return <Tr key={item._id}>
                    <Td>{item.leaseNumber}</Td>
                    <Td>{item.propertycode}</Td>
                    <Td>{item.unit}</Td>
                    <Td>{item.amount}</Td>
                    <Td>{item.startDate.split("T")[0]}</Td>
                    <Td>{item.lastBill.split("T")[0]}</Td>
                    <Td>{!isLoading ? "inActive": "Active" }</Td>
                    {
                      LandLord.map((item,index)=>(
                        <Td key={index}>
                          <Image src={base + `${item.document}`} height="50px" />
                        </Td>
                      ))
                      }
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

export default Leases