import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Setting = () => {
  return (
    <div>
      <Flex >
        <Box>
          <Link to='/'>
            System
          </Link>
        </Box>
        <Box>Right</Box>
      </Flex>
    </div>
  )
}

export default Setting