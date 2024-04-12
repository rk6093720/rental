import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Select, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { editInvoice, getInvoice } from "../Redux/Payment/action";
import { GET_INVOICE_SUCCESS } from "../Redux/Payment/actionTypes";
const EditInvoice = () =>{
    const {id} = useParams()
    const [invoice,setInvoice]=useState("");
    const [date,setDate]=useState("");
    const [roomType,setRoomType]=useState("");
    const [period,setPeriod]=useState("");
    const [totalAmount,setTotalAmount]=useState("");
    const [payment,setPayment]=useState("");
    const [rent,setRent]=useState("");
    const [month,setMonth]=useState("");
    const [year,setYear]=useState("");
    const location = useLocation();
    const [currentLand,setCurrentLand]=useState({});
    const dispatch= useDispatch();
    const toast = useToast();
    const invoiceLand = useSelector((state)=> state.Payment.invoice);
    const navigate = useNavigate();
    const handleEditInvoice=(e)=>{
        e.preventDefault();
        const payload={
           invoice,
           date,
           roomType,
           period,
           totalAmount,
           payment,
           rent,
           month,
           year,
        }
        dispatch(
          editInvoice(id,payload)
          )
        .then(()=> dispatch(
          getInvoice()
          ))
        .then((r)=>{
            if(r.type === GET_INVOICE_SUCCESS
              ){
                toast({
                  title: 'Invoice is Edit Successfully',
                  duration: 5000,
                  position: 'top',
                  isClosable: true,
                  colorScheme: 'green',
                  status: 'success',
                })
                if(location.pathname === `/superAdmin/invoice/${id}/edit`){
                    navigate("/superAdmin/invoices")
                }
                else if(location.pathname === `/tentant-dashboard/invoice/${id}/edit`)
                {
                    navigate("/tentant-dashboard/invoices")
                }else{
                    navigate("/owner-dashboard/invoices")
                }
              }
        })
        .catch((e)=>{
            console.log(e);
        })

    }
    useEffect(()=>{
        if(invoiceLand.length===0)
        {
         dispatch(
          getInvoice()
          )
        }
     },[invoiceLand.length, dispatch])
     useEffect(()=>{
       if(id){
          const landById = invoiceLand.find((lands)=> lands._id === id)
           landById && setCurrentLand(landById);
         landById && setInvoice(landById.invoice)
         landById && setDate(landById.date)
         landById && setRoomType(landById.roomType)
         landById && setPeriod(landById.period)
         landById && setTotalAmount(landById.totalAmount)
         landById && setPayment(landById.payment)
         landById && setRent(landById.rent)
         landById && setMonth(landById.month)
         landById && setYear(landById.year)
       }
     },[id, invoiceLand])
    return (
        <div>
             <Box style={{width:"100%",padding:"25px"}} >
                <Heading>Edit Invoice</Heading>
                <form onSubmit={handleEditInvoice}>
                <Flex>
              <FormControl isRequired>
                <FormLabel>Invoice Id</FormLabel>
                <Input type='text' value={invoice} onChange={(e)=>setInvoice(e.target.value)}  placeholder='payment of Id (Invoice Number)' />
              </FormControl>
              <br />
              <FormControl isRequired>
                <FormLabel>Invoice Date</FormLabel>
                <Input type='date' value={date} onChange={(e)=>setDate(e.target.value)}  placeholder='Invoice Date' />
              </FormControl>
              </Flex>
              <br/>
              <Flex>
              <FormControl isRequired>
              <FormLabel>Types of Room</FormLabel>
                <Select placeholder='Types of Room' value={roomType} onChange={(e)=>setRoomType(e.target.value)}>
                  <option value="Lease">Lease</option>
                  <option value="Room">Room</option>
                </Select>
              </FormControl>
              <br />
              <FormControl isRequired>
              <FormLabel>Period (Payment)</FormLabel>
                <Input type='text' value={period} onChange={(e)=>setPeriod(e.target.value)}  placeholder='period' />
              </FormControl>
              </Flex>
              <br/>
              <Flex>
              <FormControl isRequired>
              <FormLabel>TotalAmount</FormLabel>
                <Input type='text' value={totalAmount} onChange={(e)=>setTotalAmount(e.target.value)}  placeholder='TotalAmount' />
              </FormControl>
              <br/>
              <FormControl isRequired>
              <FormLabel>PaymentStatus</FormLabel>
                <Select   placeholder='PaymentStatus' value={payment} onChange={(e)=>setPayment(e.target.value)} > 
                <option value="Paid">Paid</option>
                <option value="Due">Due</option>
                </Select>
              </FormControl>
              </Flex>
              <br/>
              <Flex>
              <FormControl isRequired>
                <FormLabel>Month</FormLabel>
              <Select placeholder='Select Month' value={month} onChange={(e)=>setMonth(e.target.value)}>
                <option value='January'>January</option>
                <option value='February'>February</option>
                <option value='March'>March</option>
                <option value='April'>April</option>
                <option value='May'>May</option>
                <option value='June'>June</option>
                <option value='July'>July</option>
                <option value='August'>August</option>
                <option value='September'>September</option>
                <option value='October'>October</option>
                <option value='November'>November</option>
                <option value='December'>December</option>
                </Select>
                </FormControl>
              <br/>
              <FormControl isRequired>
                <FormLabel>Year</FormLabel>
               <Select placeholder='Select Year' value={year} onChange={(e)=>setYear(e.target.value)}>
                <option value='2013'>2013</option>
                <option value='2014'>2014</option>
                <option value='2015'>2015</option>
                <option value='2016'>2016</option>
                <option value='2017'>2017</option>
                <option value='2018'>2018</option>
                <option value='2019'>2019</option>
                <option value='2020'>2020</option>
                <option value='2021'>2021</option>
                <option value='2022'>2022</option>
                <option value='2023'>2023</option>
                <option value='2024'>2024</option>
                </Select>
                </FormControl>
                </Flex>
              <br/>
              <FormControl isRequired>
              <FormLabel>Rent</FormLabel>
                <Input type='text' value={rent} onChange={(e)=>setRent(e.target.value)}  placeholder='Rent' />
              </FormControl>
              <br/>
              <Box className='EditInvoiceButton'
            style={{ width: "100%", height: "30px", marginTop: "15px" }}>
            <Button className='button'
              type="submit"
              _hover={{ color: "white", bg: "green" }}
              style={{ width: "100%", height: "50px", fontSize: "24px", color: "white", borderRadius: "15px" }}
            >Update-Invoice</Button>
          </Box>
          </form>
            </Box>
        </div>
    )
}
export default EditInvoice