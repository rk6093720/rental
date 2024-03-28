import { Box, SimpleGrid, Tab, TabList,Image, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
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
                              <Box border="1px solid black" alignItems="center" height='80px'>Types-of-Apartment:{currentApartment.typeofApartment}</Box> 
                              <Box border="1px solid black" alignItems="center" height='80px'>Description:{currentApartment.description}</Box>
                              <Box border="1px solid black" alignItems="center" height='80px'>country:{currentApartment.country}</Box>
                              <Box border="1px solid black" alignItems="center" height='80px'>Area:{currentApartment.area}</Box>
                              <Box border="1px solid black" alignItems="center" height='80px'>city:{currentApartment.city}</Box>
                              <Box border="1px solid black" alignItems="center" height='80px'>Floor:{currentApartment.floor}</Box>
                              <Box border="1px solid black" alignItems="center" height='80px'>BedRooms:{currentApartment.bedRooms}</Box>
                              <Box border="1px solid black" alignItems="center" height='80px'>BathRooms:{currentApartment.bathRooms}</Box>
                                 <Box border="1px solid black" alignItems="center" height='80px'>Terrace:{currentApartment.terrace}</Box>
                              <Box border="1px solid black" alignItems="center" height='80px'>Parking:{currentApartment.parking}</Box>
                              <Box border="1px solid black" alignItems="center" height='80px'>Price:{currentApartment.price}</Box>
                              <Box border="1px solid black" alignItems="center" height='80px'>AdvancedRent:{currentApartment.advancePaymentForRent}</Box>
                    </SimpleGrid>         
                  </TabPanel>
              </TabPanels>
          </Tabs>
    </div>
  )
}

export default ViewApartment