import { FormControl, Input, Select } from '@chakra-ui/react'
import React from 'react'
const UtilityComponent = ({utilityName,setUtilityName,cost,setCost,bill,setBill}) => {
  return (
      <div>
        <FormControl isRequired>
          <Select value={utilityName} onChange={(e) => setUtilityName(e.target.value)} placeholder='Utility Name'>
              <option value="waterBill">waterBill</option>
              <option value="electricityBill">electricityBill</option>
              <option value="security">security</option>
              <option value="garbage">garbage</option>
          </Select>
      </FormControl>
          <br />
          <FormControl isRequired>
              <Input type='number' value={cost} onChange={(e) => setCost(e.target.value)} placeholder='variable cost' />
          </FormControl>
          <br />
          <FormControl isRequired>
              <Input type='number' value={bill} onChange={(e) => setBill(e.target.value)} placeholder='fixed price of bill' />
          </FormControl></div>
  )
}

export default UtilityComponent