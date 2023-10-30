import { Box, Button, Input } from '@chakra-ui/react'
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
        <Input placeholder='upload file'/>
        <br/>
        <Input placeholder='Default Currency' />
        <br />
        <Input placeholder=' Theme Color' />
        <br /> 
        <Input placeholder='Language' />
        <br /> 
        <Input placeholder='Physical address' />
        <br />
        <Input placeholder='Postal Address' />
        <br />
        <Input placeholder='Website link' />
        <br />
        <Input placeholder='postal code' />
        <br />
        <Input placeholder='Date Format' />
        <br />
        <Input placeholder='amount thousands separator' />
        <br />
        <Input placeholder='Amount decimal separator' />
        <br />
        <Input placeholder='Amount Decimal' />
        <br />
        <Button>update parameter</Button> 
        <br />
         </Box>
    </div>
  )
}

export default System