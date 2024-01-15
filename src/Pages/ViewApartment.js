import { Box, SimpleGrid, Tab, TabList,Image, TabPanel, TabPanels, Table, TableCaption, TableContainer, Tabs, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getApartment } from '../Redux/App/action';
const ViewApartment = () => {
    const base = "http://localhost:8080/";
    const {id} = useParams();
    const dispatch = useDispatch();
    const landlord = useSelector((state)=> state.App.apartment);
    const [currentApartment,setCurrentApartment]= useState({});
    useEffect(()=>{
        if (landlord.length===0)
        {
            dispatch(getApartment())
        }
    }, [dispatch, landlord.length])
    useEffect(()=>{
       if(id){
           const currentLand = landlord.find((lands)=> lands._id === id)
          currentLand &&  setCurrentApartment(currentLand);
       }
    },[id,landlord]);
    console.log(currentApartment)
  return (
    <div>
          <Tabs>
              <TabList>
                  <Tab>Information</Tab>
              </TabList>

              <TabPanels>
                  <TabPanel>
                      <SimpleGrid columns={[2, null, 3]} spacing='40px' >
                          <Box border="1px solid black" alignItems="center" height='80px' key={currentApartment._id}>Id:{currentApartment._id} </Box>
                              <Image
                               src={base + `${currentApartment.apartmentImage}`}
                              /> 
                              <Box border="1px solid black" alignItems="center" height='80px'>title:{currentApartment.title}</Box>
                              <Box border="1px solid black" alignItems="center" height='80px'>Email:{currentApartment.email}</Box>
                              <Box border="1px solid black" alignItems="center" height='80px'>PhoneNumber:{currentApartment.phone}</Box>
                              <Box border="1px solid black" alignItems="center" height='80px'>country:{currentApartment.country}</Box>
                              <Box border="1px solid black" alignItems="center" height='80px'>state:{currentApartment.state}</Box>
                              <Box border="1px solid black" alignItems="center" height='80px'>city:{currentApartment.city}</Box>
                              <Box border="1px solid black" alignItems="center" height='80px'>postalCode:{currentApartment.postalCode}</Box>
                              <Box border="1px solid black" alignItems="center" height='80px'>Address:{currentApartment.address}</Box>
                              <Box border="1px solid black" alignItems="center" height='80px'>AdharCard:{currentApartment.adharCard}</Box>
                    </SimpleGrid>         
                  </TabPanel>
                  <TabPanel>
                      <TableContainer>
                          <Table variant='striped' colorScheme='teal'>
                              <TableCaption></TableCaption>
                              <Thead>
                                  <Tr>
                                      <Th>PropertyCode</Th>
                                      <Th>PropertyName</Th>
                                      <Th>City</Th>
                                      <Th>CountApartment</Th>
                                  </Tr>
                              </Thead>
                              <Tbody>
                                  <Tr>
                                      <Td>{currentApartment.propertyCode}</Td>
                                      <Td>{currentApartment.propertyName}</Td>
                                      <Td>{currentApartment.city}</Td>
                                      <Td>{currentApartment.countApartment}</Td>
                               </Tr>
                              </Tbody>
                          </Table>
                      </TableContainer>
                  </TabPanel>
                  <TabPanel>
                      <TableContainer>
                          <Table variant='striped' colorScheme='teal'>
                              <TableCaption></TableCaption>
                              <Thead>
                                  <Tr>
                                      <Th>registrationDate</Th>
                                      <Th>Document</Th>
                                  </Tr>
                              </Thead>
                              <Tbody>
                                  <Tr>
                                      <Td>{currentApartment.registerDate}</Td>
                                      <Td>  <Image src={ base + `${currentApartment.document}`} height="100px"/>
                                        </Td>
                                        
                                  </Tr>
                              </Tbody>
                          </Table>
                      </TableContainer>      
                  </TabPanel>
              </TabPanels>
          </Tabs>
    </div>
  )
}

export default ViewApartment