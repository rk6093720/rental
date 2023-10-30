import { Box, Input } from '@chakra-ui/react'
import React from 'react'

const System = () => {
  return (
    <div>
         <Box>
            <Input placeholder='name of the company'/>
            <br/>
            <Input placeholder='email'/>
            <br/>
        <Input placeholder='phone number' />
        <br />
        <Input placeholder='Default Currency' />
        <br />
         </Box>
    </div>
  )
}

export default System