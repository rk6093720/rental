import React, { useEffect, useState } from 'react'
import { Box, SimpleGrid, Tab, TabList, TabPanel, TabPanels,  Tabs} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getTentants } from '../Redux/Tentants/action';
const ViewProperties = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const tentant = useSelector((state) => state.Tentants.tentants);
  const [currentTentant, setCurrentTentant] = useState({});
  useEffect(() => {
    if (tentant.length === 0) {
      dispatch(getTentants())
    }
  }, [dispatch, tentant.length])
  useEffect(() => {
    if (id) {
      const currentTentant = tentant.find((lands) => lands._id === id)
      currentTentant && setCurrentTentant(currentTentant);
    }
  }, [id, tentant]);
  console.log(currentTentant)
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Information</Tab>
          {/* <Tab>Leases</Tab>
          <Tab>Invoices</Tab>
          <Tab>VacateNotice</Tab> */}
        </TabList>

        <TabPanels>
          <TabPanel>
            <SimpleGrid columns={[2, null, 3]} spacing="40px">
              <Box
                border="1px solid black"
                alignItems="center"
                height="80px"
                fontWeight={"bold"}
                key={currentTentant._id}
              >
                Id:{currentTentant._id}{" "}
              </Box>
              <Box
                border="1px solid black"
                fontWeight={"bold"}
                alignItems="center"
                height="80px"
              >
                tentant-type:{"User"}
              </Box>
              <Box
                border="1px solid black"
                fontWeight={"bold"}
                alignItems="center"
                height="80px"
              >
                firstName:{currentTentant.firstName}{" "}
              </Box>
              <Box
                border="1px solid black"
                fontWeight={"bold"}
                alignItems="center"
                height="80px"
              >
                lastName:{currentTentant.lastName}{" "}
              </Box>
              <Box
                border="1px solid black"
                fontWeight={"bold"}
                alignItems="center"
                height="80px"
              >
                email:{currentTentant.email}{" "}
              </Box>
              <Box
                border="1px solid black"
                fontWeight={"bold"}
                alignItems="center"
                height="80px"
              >
                phone:{currentTentant.phone}{" "}
              </Box>
              <Box
                border="1px solid black"
                fontWeight={"bold"}
                alignItems="center"
                height="80px"
              >
                Street:{currentTentant.currentAddress?.street}{" "}
              </Box>
              <Box
                border="1px solid black"
                fontWeight={"bold"}
                alignItems="center"
                height="80px"
              >
                city:{currentTentant.currentAddress?.city}{" "}
              </Box>
              <Box
                border="1px solid black"
                fontWeight={"bold"}
                alignItems="center"
                height="80px"
              >
                country:{currentTentant.currentAddress?.country}{" "}
              </Box>
              <Box
                border="1px solid black"
                fontWeight={"bold"}
                alignItems="center"
                height="80px"
              >
                state:{currentTentant.currentAddress?.state}{" "}
              </Box>
              <Box
                border="1px solid black"
                fontWeight={"bold"}
                alignItems="center"
                height="80px"
              >
                zipCode:{currentTentant.currentAddress?.zipCode}{" "}
              </Box>
              <Box
                border="1px solid black"
                fontWeight={"bold"}
                alignItems="center"
                height="80px"
              >
                ResidentalStreet:{currentTentant.residentalAddress?.street}{" "}
              </Box>
              <Box
                border="1px solid black"
                fontWeight={"bold"}
                alignItems="center"
                height="80px"
              >
                ResidentalCity:{currentTentant.residentalAddress?.city}{" "}
              </Box>
              <Box
                border="1px solid black"
                fontWeight={"bold"}
                alignItems="center"
                height="80px"
              >
                ResidentalState:{currentTentant.residentalAddress?.state}{" "}
              </Box>
              <Box
                border="1px solid black"
                fontWeight={"bold"}
                alignItems="center"
                height="80px"
              >
                Country:{currentTentant.residentalAddress?.country}{" "}
              </Box>
              <Box
                border="1px solid black"
                fontWeight={"bold"}
                alignItems="center"
                height="80px"
              >
                ResidentalPostalCode:{currentTentant.residentalAddress?.zipCode}{" "}
              </Box>
              {/* <Box border="1px solid black" alignItems="center" height='80px' >password:{currentTentant._id} </Box> */}
            </SimpleGrid>
          </TabPanel>
          {/* <TabPanel>
            <TableContainer>
              <Table variant="striped" colorScheme="teal">
                <TableCaption></TableCaption>
                <Thead>
                  <Tr>
                    <Th>please wait ......</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel> */}
          {/* <TabPanel>
            <TableContainer>
              <Table variant="striped" colorScheme="teal">
                <TableCaption></TableCaption>
                <Thead>
                  <Tr>
                    <Th>Leases</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>here i show quickly data please wait ....</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel> */}
        </TabPanels>
      </Tabs>
    </div>
  );
}
export default ViewProperties