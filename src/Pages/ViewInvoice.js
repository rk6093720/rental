import { Box, SimpleGrid, Tab,Tabs, TabList, TabPanel, TabPanels } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getInvoice } from '../Redux/VacateNotice/action';
const ViewInvoice = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const invoice = useSelector((state)=> state.VacateNotice.invoice);
    const [currentInvoice,setCurrentInvoice]= useState({});
    useEffect(()=>{
        if (invoice.length===0)
        {
            dispatch(getInvoice())
        }
    }, [dispatch, invoice.length])
    useEffect(()=>{
       if(id){
           const currentLand = invoice.find((lands)=> lands._id === id)
          currentLand &&  setCurrentInvoice(currentLand);
       }
    },[id,invoice]);
    console.log(currentInvoice)
  return (
    <div>
          <Tabs>
              <TabList>
                  <Tab>Information</Tab>
              </TabList>

              <TabPanels>
                  <TabPanel>
                      <SimpleGrid columns={[2, null, 3]} spacing='40px' >
                          <Box border="1px solid black" alignItems="center" height='80px' key={currentInvoice._id}>Id:{currentInvoice._id} </Box>
                              <Box border="1px solid black" alignItems="center" height='80px'>InvoiceId:{currentInvoice.invoice}</Box>
                              <Box border="1px solid black" alignItems="center" height='80px'>Date:{currentInvoice.date}</Box>
                              <Box border="1px solid black" alignItems="center" height='80px'>RoomType:{currentInvoice.roomType}</Box>
                              <Box border="1px solid black" alignItems="center" height='80px'>Period:{currentInvoice.period}</Box>
                              <Box border="1px solid black" alignItems="center" height='80px'>Month:{currentInvoice.month}</Box>
                              <Box border="1px solid black" alignItems="center" height='80px'>TotalAmount:{currentInvoice.totalAmount}</Box>
                              <Box border="1px solid black" alignItems="center" height='80px'>Year:{currentInvoice.year}</Box>
                              <Box border="1px solid black" alignItems="center" height='80px'>Rent:{currentInvoice.rent}</Box>
                              <Box border="1px solid black" alignItems="center" height='80px'>Payment:{currentInvoice.payment}</Box>
                    </SimpleGrid>         
                  </TabPanel>
              </TabPanels>
          </Tabs>
    </div>
  )
}

export default ViewInvoice