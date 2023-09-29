import { Box, Button, Image, SimpleGrid, Tab, TabList, TabPanel, TabPanels, Table, TableCaption, TableContainer, Tabs, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getLandlord } from '../Redux/App/action';
const ViewLandLord = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const landlord = useSelector((state)=> state.App.landlord);
    const [currentLandLord,setCurrentLandLord]= useState({});
    useEffect(()=>{
        if (landlord.length===0)
        {
            dispatch(getLandlord())
        }
    }, [dispatch, landlord.length])
    useEffect(()=>{
       if(id){
           const currentLand = landlord.find((lands)=> lands._id === id)
          currentLand &&  setCurrentLandLord(currentLand);
       }
    },[id,landlord]);
    console.log(currentLandLord)
  return (
    <div>
          <Tabs>
              <TabList>
                  <Tab>Information</Tab>
                  <Tab>Properties</Tab>
                  <Tab>Document</Tab>
              </TabList>

              <TabPanels>
                  <TabPanel>
                      <SimpleGrid columns={[2, null, 3]} spacing='40px' >
                          <Box border="1px solid black" alignItems="center" height='80px' key={currentLandLord._id}>Id:{currentLandLord._id} </Box>
                              <Box border="1px solid black" alignItems="center" height='80px'>FirstName:{currentLandLord.firstName}</Box>
                              <Box border="1px solid black" alignItems="center" height='80px'>lastName:{currentLandLord.LastName}</Box>
                              <Box border="1px solid black" alignItems="center" height='80px'>Email:{currentLandLord.email}</Box>
                              <Box border="1px solid black" alignItems="center" height='80px'>PhoneNumber:{currentLandLord.phone}</Box>
                              <Box border="1px solid black" alignItems="center" height='80px'>country:{currentLandLord.country}</Box>
                              <Box border="1px solid black" alignItems="center" height='80px'>state:{currentLandLord.state}</Box>
                              <Box border="1px solid black" alignItems="center" height='80px'>city:{currentLandLord.city}</Box>
                              <Box border="1px solid black" alignItems="center" height='80px'>postalCode:{currentLandLord.postalCode}</Box>
                              <Box border="1px solid black" alignItems="center" height='80px'>Address:{currentLandLord.address}</Box>
                              <Box border="1px solid black" alignItems="center" height='80px'>AdharCard:{currentLandLord.adharCard}</Box>
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
                                      <Td>{currentLandLord.propertyCode}</Td>
                                      <Td>{currentLandLord.propertyName}</Td>
                                      <Td>{currentLandLord.city}</Td>
                                      <Td>{currentLandLord.countApartment}</Td>
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
                                      <Td>{currentLandLord.registerDate}</Td>
                                      <Td>  <Image src={`/images/${currentLandLord.document}`} height="100px"/>
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

export default ViewLandLord