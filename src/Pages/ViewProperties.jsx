import React, { useEffect, useState } from 'react'
import { Box, Image, SimpleGrid, Tab, TabList, TabPanel, TabPanels, Table, TableCaption, TableContainer, Tabs, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getProperty } from '../Redux/Property/action';
const ViewProperties = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const property = useSelector((state) => state.Property.properties);
    const [currentProperty, setCurrentProperty] = useState({});
    useEffect(() => {
        if (property.length === 0) {
            dispatch(getProperty())
        }
    }, [dispatch, property.length])
    useEffect(() => {
        if (id) {
            const currentProperty = property.find((lands) => lands._id === id)
            currentProperty && setCurrentProperty(currentProperty);
        }
    }, [id, property]);
    console.log(currentProperty)
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Information</Tab>
                    <Tab>unit(modals)</Tab>
                    <Tab>Leases</Tab>
                    <Tab>Invoices</Tab>
                    <Tab>VacateNotice</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <SimpleGrid columns={[2, null, 3]} spacing='40px' >
                            <Box border="1px solid black" alignItems="center" height='80px' key={currentProperty._id}>Id:{currentProperty._id} </Box>
                            <Box border="1px solid black" alignItems="center" height='80px'>PropertyName:{currentProperty.propertyname}</Box>
                            <Box border="1px solid black" alignItems="center" height='80px'>PropertyCode:{currentProperty.propertycode}</Box>
                            <Box border="1px solid black" alignItems="center" height='80px'>PropertyType:{currentProperty.propertyType}</Box>
                            <Box border="1px solid black" alignItems="center" height='80px'>Location:{currentProperty.location}</Box>
                            <Box border="1px solid black" alignItems="center" height='80px'>Address:{currentProperty.address}</Box>
                        </SimpleGrid>
                    </TabPanel>
                    <TabPanel>
                        <TableContainer>
                            <Table variant='striped' colorScheme='teal'>
                                <TableCaption></TableCaption>
                                <Thead>
                                    <Tr>
                                        <Th>Unit-Name</Th>
                                        <Th>Unit-Type</Th>
                                        <Th>Bed-Room</Th>
                                        <Th>Square-Foot</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>{currentProperty.propertyCode}</Td>
                                        <Td>{currentProperty.propertyName}</Td>
                                        <Td>{currentProperty.city}</Td>
                                        <Td>{currentProperty.countApartment}</Td>
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
                                        <Td>{currentProperty.registerDate}</Td>
                                        <Td>  <Image src={`/images/${currentProperty.document}`} height="100px" />
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
export default ViewProperties