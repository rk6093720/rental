import { Box, Button, FormControl, Heading, Input, Select, Stack, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPayment, postPayment } from '../Redux/Payment/action';
import { useNavigate } from 'react-router-dom';
const EditPayment = () =>{
    const [paymentTentant,setPaymentTentant]=useState("");
    const [paymentLease, setPaymentLease] = useState("");
    const [amount,setAmount]=useState(0);
    const [paymentMethod,setPaymentMethod]=useState("");
    const [paymentDate,setPaymentDate]=useState("");
    const [paidBy,setPaidBy]=useState("");
    const [referenceNumber, setReferenceNumber]=useState("");
    const [beingPaymentFor, setBeingPaymentFor]=useState("");
    const [extraNotes, setExtraNotes]=useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const tentant = useSelector((state) => state.Tentants.tentants);
    const lease = useSelector((state) => state.Lease.leases);
    const handleAddPayment= async()=>{
      const payload={
        paymentTentant,
        paymentLease,
        amount,
        paymentMethod,
        paymentDate,
        paidBy,
        referenceNumber,
        beingPaymentFor,
        extraNotes
      }
      try {
        await dispatch(postPayment(payload));
        await dispatch(getPayment());
        navigate("/payment")
      } catch (error) {
        console.log(error);
      }
    }
    return (
        <div>
              <Stack>
          <Heading size={2}>Add Payment</Heading>
        <FormControl isRequired>
          <Select value={paymentTentant} onChange={(e)=>setPaymentTentant(e.target.value)} placeholder='tentant'>
            {
              tentant.map((item,index)=>(
                <option key={index} value={item.firstName}>{item.firstName}</option>
              ))
            }
          </Select>
        </FormControl>
        <FormControl isRequired>
          <Select value={paymentLease} onChange={(e)=>setPaymentLease(e.target.value)} placeholder='lease'>
            {
              lease.map((item,index)=>(
                <option key={index} value={item.leaseNumber}>{item.leaseNumber}</option>
              ))
            }
          </Select>
        </FormControl>
        <FormControl>
          <Input type='number' value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder='Amount'/>
        </FormControl>
        <FormControl isRequired>
          <Select value={paymentMethod} onChange={(e)=>setPaymentMethod(e.target.value)} placeholder='Payment Method'>
            <option>Cash</option>
            <option>Bank Transfer</option>
            <option>Cheque</option>
            <option>PhonePay</option>
            <option>GPay</option>
            <option>Paytm</option>
          </Select>
        </FormControl>
        <FormControl>
          <Input type='date' value={paymentDate} onChange={(e)=>setPaymentDate(e.target.value)} />
        </FormControl>
        <FormControl>
          <Input type='text' value={paidBy} onChange={(e)=>setPaidBy(e.target.value)} placeholder='paid By' />
        </FormControl>
        <FormControl>
          <Input type='text' value={referenceNumber} onChange={(e)=>setReferenceNumber(e.target.value)} placeholder='Reference Number' />
        </FormControl>
        <FormControl>
          <Input type='text' value={beingPaymentFor} onChange={(e)=>setBeingPaymentFor(e.target.value)} placeholder='Being Payment for' />
        </FormControl>
        <FormControl>
          <Textarea value={extraNotes} onChange={(e)=>setExtraNotes(e.target.value)} placeholder='Extra notes' />
        </FormControl>
      </Stack>
      <Box>
        <Button onClick={handleAddPayment}>AddPayment</Button>
      </Box>
        </div>
    )
}
export default EditPayment;