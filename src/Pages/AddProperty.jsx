import React, { useState } from 'react';
import { Box, Button, Input, Select, Stack, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, useSteps } from '@chakra-ui/react';
const steps = [
    { title: 'PropertyDetails', description: 'Contact Info' },
    { title: 'PaymentSetting', description: 'Payment for Rooms' },
    { title: 'Extra Charges', description: 'Extra Charge of Rooms' },
    { title: 'Late Fee', description: 'Late fine Rooms' },
    { title: 'Utilities', description: 'Utlitity' },
]
const AddProperty = () => {
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
                                    <option value="Paytm">Paytm</option>
                                    <option value="GooglePay">GooglePay</option>
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
                                <Button onClick={handlePrev} >Previous</Button>
                                {active < steps.length - 1 && (
                                    <Button onClick={handleNext}>Next</Button>
                                )}

                            </Box>
                        )}
                        {active === 3 && index === active && (
                            <Box>
                                {/* Input fields for the current step */}
                                {/* Add your input fields here */}
                                <Input type='text' placeholder='enter your property code' />
                                <Button onClick={handlePrev} >Previous</Button>
                                {active < steps.length - 1 && (
                                    <Button onClick={handleNext}>Next</Button>
                                )}

                            </Box>
                        )}
                        {active === 4 && index === active && (
                            <Box>
                                {/* Input fields for the current step */}
                                {/* Add your input fields here */}
                                <Input type='text' placeholder='enter your property code' />
                                <Button onClick={handlePrev} >Previous</Button>
                                {active < steps.length - 1 && (
                                    <Button  onClick={handleNext}>Next</Button>
                                )}
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
};
export default AddProperty;
