import React, { useState } from 'react';
import { Box, Button, Input, Select, Stack, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper } from '@chakra-ui/react';
const steps = [
    { title: 'PropertyDetails', description: 'Contact Info' },
    { title: 'PaymentSetting', description: 'Payment for Rooms' },
    { title: 'Extra Charges', description: 'Extra Charge of Rooms' },
    { title: 'Late Fee', description: 'Late fine Rooms' },
    { title: 'Utilities', description: 'Utlitity' },
]
const AddProperty = () => {
    const [propertyName, setPropertyName]=useState("");
    const [propertyCode,setPropertyCode]= useState("");
    const [address,setAddress]= useState("");
    const [location,setLocation]= useState("");
    const [pType,setPType]= useState("");
    const [agentC,setAgentC]=useState(0);
    const [agentType,setAgentType]= useState("");
    const [paymentType,setPaymentType]= useState("");
    const [methodType,setMethodType]= useState("");
    const [pDescription,setPDescription]= useState('');
    const [extraFee,setExtraFee]= useState("");
    const [valueCharge,setValueCharge]= useState("");
    const [charge,setCharge]= useState("");
    const [recurrence,setRecurrence]= useState("");
    const [lateFine,setLateFine]=useState("");
    const [extraCharge,setExtraCharge]=useState("");
    const [typesCharge,setTypesCharge]= useState("");
    const [gracePeriod,setGracePeriod]= useState(0);
    const [frequency,setFrequency]= useState("");
    const [utilityName,setUtilityName]=useState("");
    const [cost,setCost]=useState(0);
    const [bill,setBill]=useState(0);
    const [active,setActive]= useState(0)
    const handlePrev = () => {
        setActive((active)=> active - 1)// Go to the previous step
    };
    const handleNext = () => {
        setActive((active)=> active + 1) // Go to the next step
    };

    return (
        <Stack>
            <Stepper size="lg" index={active} orientation='vertical' height='400px' gap='0'>
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
                            <Box>
                                <Input type='text' placeholder='enter your property Name' />
                                <Input type="text" placeholder='enter your property code' />
                                <Input type='text' placeholder='enter your address' />
                                <Input type='text' placeholder='enter your location'/>
                                <Select placeholder='select your property type'>
                                    <option value="Other">Other</option>
                                    <option value="Apartment">Apartment</option>
                                    <option value="Home">Home</option>
                                    <option value="commercial">commercial</option>
                                    <option value="shop">Shop</option>
                                </Select>
                                <Button onClick={handlePrev} isDisabled={index === 0}>Previous</Button>
                                {active < steps.length - 1 && (
                                    <Button onClick={handleNext}>Next</Button>
                                )}
                                
                            </Box>
                        )}
                        {active === 1 && index === active && (
                            <Box>
                                <Input type='number' placeholder='enter your agent commission value'/>
                                <Select placeholder='Agent commission type'>
                                    <option value="fixedValue">fixedValue</option>
                                    <option value="% of Total Rent">% of Total Rent</option>
                                    <option value="% of Total collected Rent">% of Total collected Rent</option>
                                </Select>
                                <Select placeholder='payment method type'>
                                    <option value="Payment of UPI">Payment of UPI</option>
                                    <option value="PhonePay">PhonePay</option>
                                    <option value="Gst">Gst</option>
                                    <option value="GooglePay">vat</option>
                                    <option value="Credit Card">Credit Card</option>
                                    <option value="Debit Card">Debit Card</option>
                                </Select>
                                <Input type="text" placeholder='enter your payment description'/>
                                <Button onClick={handlePrev} >Previous</Button>
                                {active < steps.length - 1 && (
                                    <Button onClick={handleNext}>Next</Button>
                                )}

                            </Box>
                        )}
                        {active === 2 && index === active && (
                            <Box>
                                 <Select placeholder='types of extra fee'>
                                    <option value="processing Fee">processing Fee</option>
                                    <option value="Service fee">Service fee</option>
                                    <option value="Paytm">Gst</option>
                                    <option value="vat">vat</option>
                                </Select>
                                <Input type='Number' placeholder='value charge supplement'/>
                                 <Select placeholder='types of charge '>
                                    <option value="fixed Value">fixed Value</option>
                                    <option value="% of Total Rent">% of Total Rent</option>
                                    <option value="% of Total amount over due">% of Total amount over due</option>
                                </Select>
                                 <Select placeholder='types of Recurrence'>
                                    <option value="one time">one time</option>
                                    <option value="period of period">period of period</option>
                                </Select>
                                <Button onClick={handlePrev} >Previous</Button>
                                {active < steps.length - 1 && (
                                    <Button onClick={handleNext}>Next</Button>
                                )}

                            </Box>
                        )}
                        {active === 3 && index === active && (
                            <Box>
                                <Select placeholder='types of late fine'>
                                    <option value="penalty">penalty</option>
                                </Select>
                                <Input type='number' placeholder='extra charge of late fee ' />
                                <Select placeholder='types of charge '>
                                    <option value="fixed Value">fixed Value</option>
                                    <option value="% of Total Rent">% of Total Rent</option>
                                    <option value="% of Total amount over due">% of Total amount over due</option>
                                </Select>
                                <Input type='number' placeholder='grace period ' />
                                <Select placeholder='frequency'>
                                    <option value="one time">one time</option>
                                    <option value="weekly">weekly</option>
                                    <option value="daily">daily</option>
                                    <option value="monthly">monthly</option>
                                    <option value="Bi-weekly">Bi-weekly</option>
                                </Select>
                                <Button onClick={handlePrev} >Previous</Button>
                                {active < steps.length - 1 && (
                                    <Button onClick={handleNext}>Next</Button>
                                )}

                            </Box>
                        )}
                        {active === 4 && index === active && (
                            <Box>
                                <Select placeholder='Utility Name'>
                                    <option value="waterBill">waterBill</option>
                                    <option value="electricityBill">electricityBill</option>
                                    <option value="security">security</option>
                                    <option value="garbage">garbage</option>
                                </Select>
                                <Input type='number' placeholder='variable cost'/>
                                <Input type='number' placeholder='fixed price of bill'/>
                                <Button onClick={handlePrev} >Previous</Button>
                                {/* {active < steps.length - 1 && (
                                    <Button  onClick={handleNext}>Next</Button>
                                )} */}
                            </Box>
                        )}
                    </Step>
                ))}
            </Stepper>
            {active === steps.length - 1 && (
                <Button>Submit</Button>
            )}
        </Stack>
    );
}
export default AddProperty;
