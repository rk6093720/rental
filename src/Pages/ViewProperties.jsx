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
                    <Tab>unit</Tab>
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
                                    {currentProperty.modals && currentProperty.modals.map((unit, index) => (
                                        <Tr key={index}>
                                            <Td>{unit.unitName}</Td>
                                            <Td>{unit.unitType}</Td>
                                            <Td>{unit.bedRoom}</Td>
                                            <Td>{unit.squareFoot}</Td>
                                        </Tr>
                                    ))}
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
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}
export default ViewProperties