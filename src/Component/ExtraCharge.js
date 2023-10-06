import { FormControl, Input, Select } from '@chakra-ui/react'
import React from 'react'

const ExtraCharge = ({extraFee,setExtraFee,valueCharge,setValueCharge,charge,setCharge,recurrence,setRecurrence}) => {
  return (
    <div>
          <FormControl isRequired>
              <Select value={extraFee} onChange={(e) => setExtraFee(e.target.value)} placeholder='types of extra fee'>
                  <option value="processing Fee">processing Fee</option>
                  <option value="Service fee">Service fee</option>
                  <option value="Paytm">Gst</option>
                  <option value="vat">vat</option>
              </Select>
          </FormControl>
          <br />
          <FormControl isRequired>
              <Input type='Number' value={valueCharge} onChange={(e) => setValueCharge(e.target.value)} placeholder='value charge supplement' />
          </FormControl>
          <br />
          <FormControl isRequired>
              <Select value={charge} onChange={(e) => setCharge(e.target.value)} placeholder='types of charge '>
                  <option value="fixed Value">fixed Value</option>
                  <option value="% of Total Rent">% of Total Rent</option>
                  <option value="% of Total amount over due">% of Total amount over due</option>
              </Select>
          </FormControl>
          <br />
          <FormControl isRequired>
              <Select value={recurrence} onChange={(e) => setRecurrence(e.target.value)} placeholder='types of Recurrence'>
                  <option value="one time">one time</option>
                  <option value="period of period">period of period</option>
              </Select>
          </FormControl>

    </div>
  )
}

export default ExtraCharge