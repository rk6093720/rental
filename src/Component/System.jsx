import { Box, Button, FormControl, Input, Select } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const System = () => {
  const [companyName,setCompanyName]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [logo,setLogo]=useState(null);
  const [currency,setCurrency]=useState("");
  const [color,setColor]=useState("");
  const [language,setLanguage]=useState("");
  const [address,setAddress]=useState("");
  const [website,setWebsite]=useState("");
  const [postalAddress,setPostalAddress]=useState("");
  const [postalCode,setPostalCode]=useState("");
  const [date,setDate]=useState("");
  const [country,setCountry]=useState([])
  const getCountry = async()=>{
    const res = await axios.get("https://restcountries.com/v3.1/all");
    setCountry(res.data)
  }
console.log(country)
  useEffect(()=>{
     getCountry()
  },[])
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
            <Select   value={currency} onChange={(e)=>setCurrency(e.target.value)} placeholder='Default Currency'>
             {
              country.map((item, index)=>(
                <option style={{ border: "1px solid black" }} key={index} value={item.name.common}>{item.name.common + "-" + (item.currencies ? Object.values(item.currencies)[0].symbol +"-"+ Object.values(item.currencies)[0].name : "")}</option>
              ))
             }
            </Select>
         </FormControl>
        <br />
        <FormControl>
          <Select value={color} onChange={(e)=>setColor(e.target.value)} placeholder='theme color'>
              <option value="Blue">Blue</option>
              <option value="Red">Red</option>
              <option value="Green">Green</option>
              <option value="Black">Black</option>
              <option value="Orange">Orange</option>
              <option value="Grey">Grey</option>
              <option value="Yellow">Yellow</option>
              <option value="Brown">Brown</option>
              <option value="violet">violet</option>
              <option value="white">white</option>
              <option value="whiteGreen">whiteGreen</option>
          </Select>
        </FormControl>
        <br />
        <FormControl> 
        <Input type="text" value={language} onChange={(e)=>setLanguage(e.target.value)} placeholder='Language' />
        </FormControl>
        <br />
        <FormControl> 
        <Input type='text' value={address} onChange={(e)=>setAddress(e.target.value)} placeholder='Physical address' />
       </FormControl> 
        <br />
        <FormControl>
        <Input type='text' value={postalAddress} onChange={(e)=>setPostalAddress(e.target.value)} placeholder='Postal Address' />
        </FormControl>    
        <br />
        <FormControl>
        <Input type="url" value={website} onChange={(e)=>setWebsite(e.target.value)} placeholder='Website link' />
       </FormControl> 
        <br />
        <FormControl>
        <Input type="text" value={postalCode} onChange={(e)=>setPostalCode(e.target.value)} maxLength={6}  placeholder='postal code' />
        </FormControl>
        <br />
        <FormControl>
        <Input type="date" value={date} onChange={(e)=>setDate(e.target.value)} placeholder='Date Format' />
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