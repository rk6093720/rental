import React, { useEffect, useState } from 'react';
import {
    Box, Button, FormControl, Input, Stack, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, Select, Checkbox
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getLease, postLease } from '../Redux/Lease/action';
import { getProperty } from '../Redux/Property/action';
const steps = [
    {title:"LeaseInfo", description:"lease Information"},
    { title: "LeaseDeposit", description: "leaseDeposit" },
    { title: 'Tentants', description: 'find tentants' },
    { title: 'Extra Charges', description: 'Extra Charge of Rooms' },
    { title: 'Late Fee', description: 'Late fine Rooms' },
    { title: 'Utilities', description: 'Utlitity' },
    { title: 'PaymentSetting', description: 'Payment for Rooms' },
    { title:"Lease Setting", description:"Lease Setting"},   
]
const AddLease = () => {
    const [property,setProperty]=useState("");
    const [unit,setUnit]=useState("");
    const [leaseType,setLeaseType]=useState("");
    const [amount,setAmount]=useState("");
    const [startDate,setStartDate]=useState("");
    const [day,setDay]=useState("");
    const [leaseAmount,setLeaseAmount]=useState("");
    const [tentant,setTentant]=useState("");
    const [dayType,setDayType]=useState("")
    const [active, setActive] = useState(0);
    const dispatch = useDispatch();
    const properties = useSelector((state) => state.Property.properties);
    const findtentant = useSelector((state) => state.Tentants.tentants)
    const [late, setLate] = useState([]);
    const [deposit,setDeposit]=useState([]);
    const [payment, setPayment] = useState([]);
    const [extra, setExtra] = useState([]);
    const [utilities, setUtilities] = useState([]);
    const handleDeposit=()=>{
        const newDeposit={
            utility:'',
            amount:'',
        }
        setDeposit([...deposit, newDeposit])
    }
    const handlePayment = () => {
        const newPayment = {
            paymentType: "",
            pDescription: "",
        }
        setPayment([...payment, newPayment])
    }
    const handleAddExtra = () => {
        const newExtra = {
            extraFee: "",
            valueCharge: "",
            charge: "",
            recurrence: "",
        }
        setExtra([...extra, newExtra])
    }
    const handleAddLateFine = () => {
        const newLateFine = {
            lateFine: "",
            extraCharge: "",
            typesCharge: "",
            gracePeriod: "",
            frequency: "",
        };
        setLate([...late, newLateFine]);
    }
    const handleAddUtility = () => {
        const newUtility = {
            utilityName: '',
            cost: '',
            bill: '',
        };
        setUtilities([...utilities, newUtility]);
    };
    const handleDeletePayment = (index) => {
        const updatePayment = [...payment];
        updatePayment.splice(index, 1);
        setPayment(updatePayment)
    }
    const handleDeleteExtra = (index) => {
        const updateExtra = [...extra];
        updateExtra.splice(index, 1);
        setExtra(updateExtra)
    }

    const handleDeleteLatefine = (index) => {
        const updateLatefine = [...late];
        updateLatefine.splice(index, 1);
        setLate(updateLatefine)
    }

    const handleDeleteUtility = (index) => {
        const updatedUtilities = [...utilities];
        updatedUtilities.splice(index, 1);
        setUtilities(updatedUtilities);
    };
     const handleDeleteDeposit=(index)=>{
        const updateDeposit = [...deposit];
        updateDeposit.splice(index, 1);
        setDeposit(updateDeposit)
     }  
    const handlePaymentType = (index, value) => {
        const updatePayment = [...payment];
        updatePayment[index].paymentType = value;
        setPayment(updatePayment)
    }

    const handlePDescription = (index, value) => {
        const updatePayment = [...payment];
        updatePayment[index].pDescription = value;
        setPayment(updatePayment)
    }
    const handleExtraFeeChange = (index, value) => {
        const updateExtraCharge = [...extra];
        updateExtraCharge[index].extraFee = value;
        setExtra(updateExtraCharge)
    }
    const handleValueChargeChange = (index, value) => {
        const updateExtraCharge = [...extra];
        updateExtraCharge[index].valueCharge = value;
        setExtra(updateExtraCharge)
    }
    const handleChargeChange = (index, value) => {
        const updateExtraCharge = [...extra];
        updateExtraCharge[index].charge = value;
        setExtra(updateExtraCharge)
    }
    const handleRecurrence = (index, value) => {
        const updateExtraCharge = [...extra];
        updateExtraCharge[index].recurrence = value;
        setExtra(updateExtraCharge)
    }
    const handleLateFineChange = (index, value) => {
        const updateLatefine = [...late];
        updateLatefine[index].lateFine = value;
        setLate(updateLatefine)
    }
    const handleExtraChargeChange = (index, value) => {
        const updateLatefine = [...late];
        updateLatefine[index].extraCharge = value;
        setLate(updateLatefine)
    }
    const handleTypesChargeChange = (index, value) => {
        const updateLatefine = [...late];
        updateLatefine[index].typesCharge = value;
        setLate(updateLatefine)
    }
    const handleGracePeriodChange = (index, value) => {
        const updateLatefine = [...late];
        updateLatefine[index].gracePeriod = value;
        setLate(updateLatefine)
    }
    const handleFrequencyChange = (index, value) => {
        const updateLatefine = [...late];
        updateLatefine[index].frequency = value;
        setLate(updateLatefine)
    }
    const handleUtilityNameChange = (index, value) => {
        const updatedUtilities = [...utilities];
        updatedUtilities[index].utilityName = value;
        setUtilities(updatedUtilities);
    };

    const handleCostChange = (index, value) => {
        const updatedUtilities = [...utilities];
        updatedUtilities[index].cost = value;
        setUtilities(updatedUtilities);
    };

    const handleBillChange = (index, value) => {
        const updatedUtilities = [...utilities];
        updatedUtilities[index].bill = value;
        setUtilities(updatedUtilities);
    };
    const handleUtilityType=(index, value)=>{
        const updateDeposit =[...deposit];
        updateDeposit[index].utility=value;
        setDeposit(updateDeposit)
    }
    const handleAmount =(index, value)=>{
        const updateAmount =[...deposit];
        updateAmount[index].amount=value;
        setDeposit(updateAmount)
    }
    const handleAddLease = async () => {
        const payload = {
            property,
            unit,
            leaseType,
            amount,
            startDate,
            day,
            leaseAmount,
            tentant,
            dayType,
            payment,
            extra,
            late,
            utilities,
            deposit
        };
        try {
            await dispatch(postLease(payload));
            await dispatch(getLease());
        } catch (error) {
            console.log(error);
        }
    };

    const handlePrev = () => {
        setActive((active) => active - 1)// Go to the previous step
    };
    const handleNext = () => {
        setActive((active) => active + 1) // Go to the next step
    };
    useEffect(()=>{
        dispatch(getProperty())
    },[dispatch])
    console.log(properties)
    return (
        <Stack style={{ width: "100%", height: "100vh", marginTop: "15px" }}>
            <Stepper size="lg" index={active} orientation='vertical' height='400px' gap='0' marginTop={"15px"} padding={"10px"}>
                {steps.map((step, index) => (
                    <Step key={index}>
                        <StepIndicator>
                            <StepStatus
                                complete={<StepIcon />}
                                incomplete={<StepNumber />}
                                active={<StepNumber />}
                            />
                        </StepIndicator>

                        <Box flexShrink="0">
                            <StepTitle>{step.title}</StepTitle>
                            <StepDescription>{step.description}</StepDescription>
                        </Box>

                        <StepSeparator />
                        {/* Add input fields and buttons for each step */}
                        {active === 0 && index === active && (
                            <Box style={{ marginTop: "45px" }}>
                                <FormControl isRequired>
                
                                    <Select value={property} onChange={(e)=>setProperty(e.target.value)} placeholder='find property name ' >
                                        {
                                            properties.map((item) => (
                                                <option key={item._id} value={item.propertyname}>{item.propertyname}</option>
                                            ))
                                        }
                                    </Select>   
                                </FormControl>
                                
                                <br />
                                <FormControl isRequired>
                                    <Select value={unit} onChange={(e) => setUnit(e.target.value)} placeholder='find unit'>
                                       {
                                        properties.map((item,index)=>(
                                            item.modals.map((subItem,subIndex)=>(
                                               <option key={index+subIndex} value={subItem.totalRoom}>{subItem.totalRoom}</option>
                                            ))))}

                                    </Select>
                                </FormControl>
                                <br />
                                <FormControl isRequired>
                                    <Select value={leaseType} onChange={(e) => setLeaseType(e.target.value)} placeholder='select your Lease type'>
                                        <option value="Residental">Residental</option>
                                        <option value="Commercial">Commercial</option>
                                    </Select>
                                </FormControl>
                                <br />
                                <FormControl isRequired>
                                    <Input type="text" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder='enter your amount' />
                                </FormControl>
                                <br />
                                <FormControl isRequired>
                                    <Input type='datetime-local' value={startDate} onChange={(e) => setStartDate(e.target.value)} placeholder='enter your start Date' />
                                </FormControl>
                                <br />
                                <FormControl isRequired>
                                    <Select value={day} onChange={(e)=>setDay(e.target.value)} placeholder='select your due days of payment'>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>

                                    </Select>

                                </FormControl>
                                <Button onClick={handlePrev} isDisabled={index === 0}>Previous</Button>
                                {active < steps.length - 1 && (
                                    <Button onClick={handleNext}>Next</Button>
                                )}

                            </Box>
                        )}
                        {active === 1 && index === active && (
                            <Box style={{ marginTop: "45px" }}>
                                <FormControl isRequired>
                                    <Input type='number' value={leaseAmount} onChange={(e)=>setLeaseAmount(e.target.value)}   placeholder='enter your lease Amount' />
                                </FormControl>
                                <br />
                                {deposit.map((lease, index) => (
                                    <div key={index}>
                                        <FormControl isRequired>
                                            <Select value={lease.utility} onChange={(e) => handleUtilityType(index, e.target.value)} placeholder='payment method type'>
                                                <option value="security">security</option>
                                                <option value="water">water</option>
                                                <option value="electricity">electricity</option>
                                                <option value="garbage">garbage</option>
                                                <option value="gas">gas</option>
                                               
                                            </Select>
                                        </FormControl>
                                        <br />
                                        <FormControl isRequired>
                                            <Input type="text" value={lease.amount} onChange={(e) => handleAmount(index, e.target.value)} placeholder='enter your lease deposit amount' />
                                        </FormControl>
                                        <Button onClick={() => handleDeleteDeposit(index)}>DeletePayment</Button>
                                    </div>

                                ))}
                                <Button onClick={handleDeposit}>AddDeposit</Button>

                                <br />
                                <Button onClick={handlePrev} >Previous</Button>
                                {active < steps.length - 1 && (
                                    <Button onClick={handleNext}>Next</Button>
                                )}

                            </Box>
                        )}
                        { active === 2 && index === active && (
                            <Box style={{ marginTop: "45px" }}>
                                <FormControl isRequired>
                                    <Select value={tentant}
                                        onChange={(e)=>setTentant(e.target.value)}
                                        placeholder='find tentant'>
                                    {
                                        findtentant.map((item,index)=>(
                                            <option key={index} value={item.firstName + item.lastName}>{item.firstName + item.lastName}</option>
                                        ))
                                    }
                                </Select> 
                                </FormControl>
                                <br/>
                                <Button onClick={handlePrev} >Previous</Button>
                                {active < steps.length - 1 && (
                                    <Button onClick={handleNext}>Next</Button>
                                )}
                            </Box>
                        )}
                        {active === 3 && index === active && (
                            <Box style={{ marginTop: "45px" }}>
                                {extra.map((extra, index) => (
                                    <div key={index}>
                                        <FormControl isRequired>
                                            <Select value={extra.extraFee} onChange={(e) => handleExtraFeeChange(index, e.target.value)} placeholder='types of extra fee'>
                                                <option value="processing Fee">processing Fee</option>
                                                <option value="Service fee">Service fee</option>
                                                <option value="Paytm">Gst</option>
                                                <option value="vat">vat</option>
                                            </Select>
                                        </FormControl>
                                        <br />
                                        <FormControl isRequired>
                                            <Input type='Number' value={extra.valueCharge} onChange={(e) => handleValueChargeChange(index, e.target.value)} placeholder='value charge supplement' />
                                        </FormControl>
                                        <br />
                                        <FormControl isRequired>
                                            <Select value={extra.charge} onChange={(e) => handleChargeChange(index, e.target.value)} placeholder='types of charge '>
                                                <option value="fixed Value">fixed Value</option>
                                                <option value="% of Total Rent">% of Total Rent</option>
                                                <option value="% of Total amount over due">% of Total amount over due</option>
                                            </Select>
                                        </FormControl>
                                        <br />
                                        <FormControl isRequired>
                                            <Select value={extra.recurrence} onChange={(e) => handleRecurrence(index, e.target.value)} placeholder='types of Recurrence'>
                                                <option value="one time">one time</option>
                                                <option value="period of period">period of period</option>
                                            </Select>
                                        </FormControl>
                                        <Button onClick={() => handleDeleteExtra(index)}>DeleteExtra</Button>
                                    </div>
                                ))}
                                <Button onClick={handleAddExtra}>AddExtra</Button>
                                <br />
                                <Button onClick={handlePrev} >Previous</Button>
                                {active < steps.length - 1 && (
                                    <Button onClick={handleNext}>Next</Button>
                                )}

                            </Box>
                        )}
                        {active === 4 && index === active && (
                            <Box style={{ marginTop: "45px" }}>
                                {
                                    late.map((late, index) => (
                                        <div key={index}>
                                            <FormControl isRequired>
                                                <Select value={late.lateFine} onChange={(e) => handleLateFineChange(index, e.target.value)} placeholder='types of late fine'>
                                                    <option value="penalty">penalty</option>
                                                </Select>
                                            </FormControl>
                                            <br />
                                            <FormControl isRequired>
                                                <Input type='number' value={late.extraCharge} onChange={(e) => handleExtraChargeChange(index, e.target.value)} placeholder='extra charge of late fee ' />
                                            </FormControl>
                                            <br />
                                            <FormControl isRequired>
                                                <Select value={late.typesCharge} onChange={(e) => handleTypesChargeChange(index, e.target.value)} placeholder='types of charge '>
                                                    <option value="fixed Value">fixed Value</option>
                                                    <option value="% of Total Rent">% of Total Rent</option>
                                                    <option value="% of Total amount over due">% of Total amount over due</option>
                                                </Select>
                                            </FormControl>
                                            <br />
                                            <FormControl isRequired>
                                                <Input type='number' value={late.gracePeriod} onChange={(e) => handleGracePeriodChange(index, e.target.value)} placeholder='grace period ' />
                                            </FormControl>
                                            <br />
                                            <FormControl isRequired>
                                                <Select value={late.frequency} onChange={(e) => handleFrequencyChange(index, e.target.value)} placeholder='frequency'>
                                                    <option value="one time">one time</option>
                                                    <option value="weekly">weekly</option>
                                                    <option value="daily">daily</option>
                                                    <option value="monthly">monthly</option>
                                                    <option value="Bi-weekly">Bi-weekly</option>
                                                </Select>
                                            </FormControl>
                                            <Button onClick={() => handleDeleteLatefine(index)}>DeleteLateFine</Button>
                                        </div>
                                    ))
                                }
                                <Button onClick={handleAddLateFine}>AddLateFine</Button>
                                <br />
                                <Button onClick={handlePrev} >Previous</Button>
                                {active < steps.length - 1 && (
                                    <Button onClick={handleNext}>Next</Button>
                                )}

                            </Box>
                        )}
                        {active === 5 && index === active && (
                            <Box style={{ marginTop: "45px" }}>
                                {utilities.map((utility, index) => (
                                    <div key={index}>
                                        <FormControl isRequired>
                                            <Select
                                                value={utility.utilityName}
                                                onChange={(e) => handleUtilityNameChange(index, e.target.value)}
                                                placeholder='Utility Name'
                                            >
                                                <option value="waterBill">waterBill</option>
                                                <option value="electricityBill">electricityBill</option>
                                                <option value="security">security</option>
                                                <option value="garbage">garbage</option>
                                            </Select>
                                        </FormControl>
                                        <br />
                                        <FormControl isRequired>
                                            <Input
                                                type='number'
                                                value={utility.cost}
                                                onChange={(e) => handleCostChange(index, e.target.value)}
                                                placeholder='variable cost'
                                            />
                                        </FormControl>
                                        <br />
                                        <FormControl isRequired>
                                            <Input
                                                type='number'
                                                value={utility.bill}
                                                onChange={(e) => handleBillChange(index, e.target.value)}
                                                placeholder='fixed price of bill'
                                            />
                                        </FormControl>
                                        <Button onClick={() => handleDeleteUtility(index)}>DeleteUtility</Button>
                                    </div>
                                ))}
                                <Button onClick={handleAddUtility}>AddUtility</Button>
                                <br />
                                <Button onClick={handlePrev}>Previous</Button>
                                {active < steps.length - 1 && (
                                    <Button onClick={handleNext}>Next</Button>
                                )}
                            </Box>
                        )}
                        {active === 6 && index === active && (
                            <Box style={{ marginTop: "45px" }}>
                                {payment.map((payment, index) => (
                                    <div key={index}>
                                        <FormControl isRequired>
                                            <Select value={payment.paymentType} onChange={(e) => handlePaymentType(index, e.target.value)} placeholder='payment method type'>
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
                                            <Input type="text" value={payment.pDescription} onChange={(e) => handlePDescription(index, e.target.value)} placeholder='enter your payment description' />
                                        </FormControl>
                                        <Button onClick={() => handleDeletePayment(index)}>DeletePayment</Button>
                                    </div>

                                ))}
                                <Button onClick={handlePayment}>AddPayment</Button>
                                <br />
                                <Button onClick={handlePrev}>Previous</Button>
                                {active < steps.length - 1 && (
                                    <Button onClick={handleNext}>Next</Button>
                                )}
                            </Box>
                        )}
                        {active === 7 && index === active && (
                            <Box style={{ marginTop: "45px" }}>
                                <FormControl isRequired>
                                    <Select value={dayType} onChange={(e) =>setDayType(e.target.value)} placeholder='Day month'>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                    </Select>
                                </FormControl>
                                <FormControl>
                                    <Stack spacing={3} direction='column'>
                                    <Checkbox defaultChecked>Next Period Billing (When billing, invoice period is set as next month.)</Checkbox>
                                     <br/>
                                    <Checkbox defaultChecked>Waive Penalty (For this lease, do not charge penalties.)</Checkbox>
                                    <br/>
                                    <Checkbox defaultChecked>Skip Starting Period (For this lease, do not bill the first period.)</Checkbox>
                                    </Stack>
                                </FormControl>
                                <Button onClick={handlePrev}>Previous</Button>
                            </Box>
                        )}
                    </Step>
                ))}
                {active === steps.length - 1 && (
                    <Button className='addPropertybutton' _hover={{ bg: "green", color: "white" }} style={{
                        marginTop: "80%", width: "30%",
                        margin: "auto", fontSize: "24px"
                    }} onClick={handleAddLease}>Submit</Button>
                )}
            </Stepper>
           
        </Stack>
    );
}
export default AddLease;
