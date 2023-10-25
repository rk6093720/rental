import { Box, SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getVacateNotice } from '../Redux/VacateNotice/action';
const ViewVacateNotice = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const vacateLand = useSelector((state) => state.VacateNotice.vacate);
  const [currentVacate, setCurrentVacate] = useState({});
  useEffect(() => {
    if (vacateLand.length === 0) {
      dispatch(getVacateNotice())
    }
  }, [dispatch, vacateLand.length])
  useEffect(() => {
    if (id) {
      const currentVacateLand = vacateLand.find((lands) => lands._id === id)
      currentVacateLand && setCurrentVacate(currentVacateLand);
    }
  }, [id, vacateLand]);
  console.log(currentVacate.vacateLand)
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Information</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SimpleGrid columns={[2, null, 3]} spacing='40px' >
              <Box border="1px solid black" alignItems="center" height='80px' key={currentVacate._id}>Id:{currentVacate._id} </Box>
              <Box border="1px solid black" alignItems="center" height='80px'>Date:{currentVacate.vacateDate}
              </Box>
              <Box border="1px solid black" alignItems="center" height='80px'>Tentant{currentVacate.vacateTentant}
             </Box>
              <Box border="1px solid black" alignItems="center" height='80px'>Unit:{currentVacate.vacateUnit}</Box>
              <Box border="1px solid black" alignItems="center" height='80px'>property:{currentVacate.vacateProperty}</Box>
              <Box border="1px solid black" alignItems="center" height='80px'>Reason:{currentVacate.reason}</Box>
            </SimpleGrid>
          </TabPanel>

        </TabPanels>
      </Tabs>
      </div>
    
  )
}

export default ViewVacateNotice