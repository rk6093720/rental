import { FormControl, Input, Select } from '@chakra-ui/react'
import React, { useState } from 'react'

const PaymentSetting = () => {
    const [paymentType,setPaymentType]=useState("");
    const [pDescription, setPDescription]=useState("")
  return (
    <div>
          <FormControl isRequired>
              <Select value={paymentType} onChange={(e) => setPaymentType(e.target.value)} placeholder='payment method type'>
                  <option value="Payment of UPI">Payment of UPI</option>
                  <option value="PhonePay">PhonePay</option>
                  <option value="Gst">Gst</option>
                  <option value="GooglePay">vat</option>
                  <option value="Credit Card">Credit Card</option>
                  <option value="Debit Card">Debit Card</option>
              </Select>
          </FormControl>
          <br />
          <FormControl isRequired>
              <Input type="text" value={pDescription} onChange={(e) => setPDescription(e.target.value)} placeholder='enter your payment description' />
          </FormControl>
    </div>
  )
}

export default PaymentSetting