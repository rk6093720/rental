import { Box, Button, FormControl, Input, Select } from '@chakra-ui/react'
import React, { useState } from 'react'

const System = () => {
  const [companyName,setCompanyName]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [logo,setLogo]=useState(null);

  return (
    <div >
      <Box  maxW='m' borderWidth='1px' borderRadius='lg' overflowX="hidden" overflowY="scroll">
          <form>
          <FormControl>
            <Input type="text" value={companyName } onChange={(e)=>setCompanyName(e.target.value)} placeholder='name of the company'/>
           </FormControl>
            <br/>
            <FormControl>
            <Input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='email'/>
            </FormControl>
            <br/>
            <FormControl>
              <Input type='text' maxLength={10} value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder='phone number' />
        </FormControl>
        <br />
        <FormControl>
        <Input type='file' value={logo} onChange={(e)=>setLogo( console.log(e.target
          .files[0]),e.target.files[0])} placeholder='upload file'/>
        </FormControl>
        <br/>
        <FormControl>
          <Select>
            <span>
                <Input placeholder='Default Currency' />
            </span>
            </Select>
         </FormControl>
        <br />
        <FormControl>
        <Input placeholder=' Theme Color' />
        </FormControl>
        <br />
        <FormControl> 
        <Input placeholder='Language' />
        </FormControl>
        <br />
        <FormControl> 
        <Input placeholder='Physical address' />
       </FormControl> 
        <br />
        <FormControl>
        <Input placeholder='Postal Address' />
        </FormControl>    
        <br />
        <FormControl>
        <Input placeholder='Website link' />
       </FormControl> 
        <br />
        <FormControl>
        <Input placeholder='postal code' />
        </FormControl>
        <br />
        <FormControl>
        <Input placeholder='Date Format' />
        </FormControl>
        <br />
        <FormControl>
        <Input placeholder='amount thousands separator' />
        </FormControl>
        <br />
        <FormControl>
        <Input placeholder='Amount decimal separator' />
        </FormControl>
        <br />
        <FormControl>
        <Input placeholder='Amount Decimal' />
        </FormControl>
        <br />
        <FormControl>
        <Button>update parameter</Button> 
        </FormControl>
        </form>
         </Box>
    </div>
  )
}

export default System