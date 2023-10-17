import { Box, SimpleGrid, Tab, TabList, TabPanel, TabPanels,Tabs } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUtility } from '../Redux/Utility/action';

const ViewUtility = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const utilitiesLand = useSelector((state) => state.Utility.utilities);
  const [currentUtility, setCurrentUtility] = useState({});
  useEffect(() => {
    if (utilitiesLand.length === 0) {
      dispatch(getUtility())
    }
  }, [dispatch, utilitiesLand.length])
  useEffect(() => {
    if (id) {
      const currentUtilityLand = utilitiesLand.find((lands) => lands._id === id)
      currentUtilityLand && setCurrentUtility(currentUtilityLand);
    }
  }, [id, utilitiesLand]);
  console.log(currentUtility.utilitiesLand)
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Information</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SimpleGrid columns={[2, null, 3]} spacing='40px' >
              <Box border="1px solid black" alignItems="center" height='80px' key={currentUtility._id}>Id:{currentUtility._id} </Box>
              <Box border="1px solid black" alignItems="center" height='80px'>Reading:{currentUtility.manual && currentUtility.manual.map((item,index)=>(
                <div key={index}>{item.reading}</div>
              ))}</Box>
              <Box border="1px solid black" alignItems="center" height='80px'>Date:{currentUtility.manual && currentUtility.manual.map((item, index) => (
                <div key={index}>{item.date.split("T")[0]}</div>
              ))}</Box>
              <Box border="1px solid black" alignItems="center" height='80px'>Unit:{currentUtility.manual && currentUtility.manual.map((item, index) => (
                <div key={index}>{item.unit}</div>
              ))}</Box>
              <Box border="1px solid black" alignItems="center" height='80px'>propertyname:{currentUtility.propertyname}</Box>
              <Box border="1px solid black" alignItems="center" height='80px'>utility:{currentUtility.utilityname}</Box>
            </SimpleGrid>
          </TabPanel>

        </TabPanels>
      </Tabs>
    </div>
  )
}

export default ViewUtility