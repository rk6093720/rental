import { Box, SimpleGrid, Tab, TabList, TabPanel, TabPanels,Tabs } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getLease } from '../Redux/Lease/action';

const ViewLease = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const leaseland = useSelector((state) => state.Lease.leases);
  const [currentLease, setCurrentLease] = useState({});
  useEffect(() => {
    if (leaseland.length === 0) {
      dispatch(getLease())
    }
  }, [dispatch, leaseland.length])
  useEffect(() => {
    if (id) {
      const currentLease = leaseland.find((lands) => lands._id === id)
      currentLease && setCurrentLease(currentLease);
    }
  }, [id, leaseland]);
  console.log(currentLease)
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Information</Tab>
          {/* <Tab>Properties</Tab>
          <Tab>Document</Tab> */}
        </TabList>
        <TabPanels>
          <TabPanel>
            <SimpleGrid columns={[2, null, 3]} spacing='40px' >
              <Box border="1px solid black" alignItems="center" height='80px' key={currentLease._id}>Id:{currentLease._id} </Box>
              <Box border="1px solid black" alignItems="center" height='80px'>Property:{currentLease.property}</Box>
              <Box border="1px solid black" alignItems="center" height='80px'>Propertycode:{currentLease.propertycode}</Box>
              <Box border="1px solid black" alignItems="center" height='80px'>LeaseType:{currentLease.leaseType}</Box>
              <Box border="1px solid black" alignItems="center" height='80px'>startDate:{currentLease.startDate}</Box>
              <Box border="1px solid black" alignItems="center" height='80px'>lastBill:{currentLease.lastBill}</Box>
              <Box border="1px solid black" alignItems="center" height='80px'>Amount:{currentLease.amount}</Box>
              <Box border="1px solid black" alignItems="center" height='80px'>LeaseNumber:{currentLease.leaseNumber}</Box>
              <Box border="1px solid black" alignItems="center" height='80px'>LeaseAmount:{currentLease.leaseAmount}</Box>
              <Box border="1px solid black" alignItems="center" height='80px'>DayType:{currentLease.dayType}</Box>
              <Box border="1px solid black" alignItems="center" height='80px'>Unit:{currentLease.unit}</Box>
            </SimpleGrid>
          </TabPanel>
         
        </TabPanels>
      </Tabs>
    </div>
  )
}

export default ViewLease