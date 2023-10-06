import { FormControl, Input, Select } from '@chakra-ui/react'
import React, { useState } from 'react'

const LateFineComp = () => {
   const [lateFine, setLateFine]=useState("");
   const [extraCharge, setExtraCharge]=useState(0);
   const [ typesCharge, setTypesCharge]=useState("");
   const [ gracePeriod, setGracePeriod]=useState(0); 
   const [frequency, setFrequency]=useState("")
  return (
    <div>
          <FormControl isRequired>
              <Select value={lateFine} onChange={(e) => setLateFine(e.target.value)} placeholder='types of late fine'>
                  <option value="penalty">penalty</option>
              </Select>
          </FormControl>
          <br />
          <FormControl isRequired>
              <Input type='number' value={extraCharge} onChange={(e) => setExtraCharge(e.target.value)} placeholder='extra charge of late fee ' />
          </FormControl>
          <br />
          <FormControl isRequired>
              <Select value={typesCharge} onChange={(e) => setTypesCharge(e.target.value)} placeholder='types of charge '>
                  <option value="fixed Value">fixed Value</option>
                  <option value="% of Total Rent">% of Total Rent</option>
                  <option value="% of Total amount over due">% of Total amount over due</option>
              </Select>
          </FormControl>
          <br />
          <FormControl isRequired>
              <Input type='number' value={gracePeriod} onChange={(e) => setGracePeriod(e.target.value)} placeholder='grace period ' />
          </FormControl>
          <br />
          <FormControl isRequired>
              <Select value={frequency} onChange={(e) => setFrequency(e.target.value)} placeholder='frequency'>
                  <option value="one time">one time</option>
                  <option value="weekly">weekly</option>
                  <option value="daily">daily</option>
                  <option value="monthly">monthly</option>
                  <option value="Bi-weekly">Bi-weekly</option>
              </Select>
          </FormControl>
    </div>
  )
}

export default LateFineComp