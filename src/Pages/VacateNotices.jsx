import { Box, Input, Spacer } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsPersonFillAdd } from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux';
import { ChevronDownIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Button, Flex, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { deleteVacateNotice, getVacateNotice } from '../Redux/VacateNotice/action';
const VacateNotices = () => {
    const dispatch = useDispatch();
    const [color, setColor] = useState(null);
    const [landlordFilter, setLandlordFilter] = useState("");
    const handleFilter = (e) => {
      setLandlordFilter(e.target.value)
    }
    // const navigate = useNavigate();
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
        <Flex minWidth='max-content' alignItems='center' gap='2'>
          <Link to="/AddVacateNotice">
            <Box style={{ border: "1px solid black", width: "250px", height: "50px", marginTop: "15px", borderRadius: "5px", backgroundColor: "black", color: "white" }}>
              <BsPersonFillAdd style={{ width: "100%", fontSize: "24px", alignItems: "center", height: "100%", padding: "1px" }} />
            </Box>
          </Link>
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
                          <Link to={`/viewVacateNotice/${item._id}`}>
                            <ChevronDownIcon />
                          </Link>
                        </Td>
                        <Td>
                          <Link to={`/vacatenotice/${item._id}/edit`}>
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