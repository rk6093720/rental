import { Box, Flex, Input, Spacer } from '@chakra-ui/react'
import React from 'react'
import Chart1 from './Chart1'

const Chart = () => {
  return (
    <div>
      <Flex >
        <Box>
              <Box>Pending Amount</Box>
              <Box>3245905</Box>
        </Box>
         <Spacer/>
        <Box>
          <Box>Properties/Unit</Box>
          <Box>5</Box>
        </Box>
        <Spacer />
        <Box>
          <Box>Lease</Box>
          <Box>5</Box>
        </Box>
        <Spacer />
        <Box>
          <Box>Tentant</Box>
          <Box>3</Box>
        </Box>
      </Flex>
      <Box style={{border:"1px solid black",marginTop:"10px",width:"50%",height:"500px"}}> 
        <Chart1/>
        <Flex>
        <Flex>
          <Box>Pending:</Box>
          <Box>273652.00</Box>
        </Flex>
        <Spacer/>
          <Flex>
            <Box>paid:</Box>
            <Box>273652.00</Box>
          </Flex>
          <Spacer/>
          <Flex>
            <Box>bill:</Box>
            <Box>273652.00</Box>
          </Flex>
        </Flex>
        <br/>
        <Box>
          <Input type='date' placeholder='period'/>
        </Box>
      </Box>
          
      
    </div>
  )
}

export default Chart